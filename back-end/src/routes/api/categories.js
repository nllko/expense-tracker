const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await loadCategoryCollection();
  const expenseCategories = await categories
    .find({ type: "expense" })
    .toArray();
  const incomeCategories = await categories.find({ type: "income" }).toArray();

  res.send({ expenseCategories, incomeCategories }).status(200);
});

async function loadCategoryCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://127.0.0.1:27017/"
  );
  return client.db("vue-tracker").collection("categories");
}

module.exports = router;
