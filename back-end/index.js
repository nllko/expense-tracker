const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World',
        fuck: 'you'
    })
})

const budget = require('./src/routes/api/budget');

app.use('/budget', budget);

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server is running on port ${port}`))