const mongodb = require("mongodb");
const { expenseCategories, incomeCategories } = require("../data/categoriesData");

async function initCategories() {
  const client = await mongodb.MongoClient.connect(process.env.MONGO_URL);
  const categories = client.db("vue-tracker").collection("categories");
  const data = await categories.find({}).toArray();
  if (data.length === 0) {
    categories.insertMany([...expenseCategories, ...incomeCategories]);
    console.log("categories initialized");
  }
}

function initializeData() {
  initCategories();
}

module.exports = { initializeData };
