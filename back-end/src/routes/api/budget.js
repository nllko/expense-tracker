const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

//GET
router.get("/transactions", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  res.send(await transactions.find({}).toArray()).status(200);
});

router.get("/balance", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  const filter = getFilter(req.query);
  const pipeline = [
    {
      $match: filter,
    },
    {
      $group: {
        _id: null,
        balance: { $sum: "$amount" },
      },
    },
  ];
  const balance = await transactions.aggregate(pipeline).toArray();
  res.send(balance[0]).status(200);
});

router.get("/transactions/latest", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  const query = getFilter(req.query);

  const latestTransactions = await transactions
    .find(query)
    .sort({ date: -1, createdAt: -1 })
    .limit(3)
    .toArray();

  res.send(latestTransactions).status(200);
});

//POST
router.post("/transaction/add", async (req, res) => {
  const transactions = await loadTransactionsCollection();
  await transactions.insertOne(req.body);
  res.send().status(201);
});

function getFilter(query) {
  const { type, date } = query;
  const filter = {};

  if (type) {
    filter.type = type;
  }

  if (date) {
    const startOfMonth = new Date(date);
    startOfMonth.setDate(1);
    const endOfMonth = new Date(date);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(0);

    filter.date = {
      $gte: startOfMonth.toISOString(),
      $lte: endOfMonth.toISOString(),
    };
  }

  return filter;
}

async function loadTransactionsCollection() {
  const client = await mongodb.MongoClient.connect(process.env.MONGO_URL);
  return client.db("vue-tracker").collection("transactions");
}

module.exports = router;
