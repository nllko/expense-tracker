const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

//GET
router.get("/transactions", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  res.send(await transactions.find({}).toArray()).status(200);
});

router.get("/transactions/latest", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  const latest = await transactions
    .find()
    .sort({ date: -1 })
    .limit(3)
    .toArray();
  res.send(latest).status(200);
});

router.get("/transactions/latestExpenses", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  const latestExpenses = await transactions
    .find({ type: "expense" })
    .sort({ date: -1 })
    .limit(3)
    .toArray();
  res.send(latestExpenses).status(200);
});

router.get("/transactions/latestIncomes", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  const latestIncomes = await transactions
    .find({ type: "income" })
    .sort({ date: -1 })
    .limit(3)
    .toArray();
  res.send(latestIncomes).status(200);
});

//POST
router.post("/transaction/add", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  await transactions.insertOne(req.body);
  res.send().status(201);
});

async function loadTransactionsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://127.0.0.1:27017/"
  );
  return client.db("vue-tracker").collection("transactions");
}

module.exports = router;
