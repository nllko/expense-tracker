const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//GET 
router.get('/transactions', async (req, res) => {
    const transactions = await loadTransactionsCollection();
    res.status(200).send(await transactions.find({}).toArray());
})

router.get('/transactions/latest', async (req, res) => {
    const transactions = await loadTransactionsCollection();
    const latest = await transactions.find().sort({ date: -1 }).limit(3).toArray()
    res.status(200).send(latest);
})

//POST
router.post('/transaction/add', async (req, res) => {
    const transactions = await loadTransactionsCollection();
    await transactions.insertOne(req.body);
    res.status(201).send();
})

async function loadTransactionsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/')
    return client.db('vue-tracker').collection('transactions');
}

module.exports = router;
