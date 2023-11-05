const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { initializeData } = require("./src/utils/initializationUtils");
require('dotenv').config()

const budget = require("./src/routes/api/budget");
const categories = require("./src/routes/api/categories");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

initializeData();

app.use("/budget", budget);
app.use("/categories", categories);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
