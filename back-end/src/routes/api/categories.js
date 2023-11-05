const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await loadCategoryCollection(req);
  const expenseCategories = await categories.find({ type: "expense" }).toArray();
  const incomeCategories = await categories.find({ type: "income" }).toArray();

  res.send({ expenseCategories, incomeCategories }).status(200);
});

async function loadCategoryCollection(req) {
  const db = req.app.locals.db;
  const categories = db.collection("categories");
  return categories;
}

module.exports = router;
