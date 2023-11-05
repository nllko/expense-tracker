const express = require("express");
const router = express.Router();

//GET
router.get("/transactions", async (req, res) => {
  const transactions = await loadTransactionsCollection(req);
  res.send(await transactions.find().toArray()).status(200);
});

//POST
router.post("/transaction/add", async (req, res) => {
  const transactions = await loadTransactionsCollection(req);
  await transactions.insertOne(req.body);
  res.send().status(201);
});

async function loadTransactionsCollection(req) {
  const db = req.app.locals.db;
  const transactions = db.collection("transactions");
  return transactions;
}

module.exports = router;
