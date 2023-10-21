const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//GET 
router.get('/incomes', async (req, res) => {
    const incomes = await loadIncomesCollection();
    res.status(200).send(await incomes.find({}).toArray());
})

router.get('/expenses', async (req, res) => {
    const expenses = await loadExpensesCollection();
    res.status(200).send(await expenses.find({}).toArray());
})

//POST
router.post('/incomes/add', async(req, res) => {
    const incomes = await loadIncomesCollection();
    await incomes.insertOne(req.body);
    res.status(201).send();
})

router.post('/expenses/add', async(req, res) => {
    const expenses = await loadExpensesCollection();
    await expenses.insertOne(req.body);
    res.status(201).send();
})

async function loadIncomesCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/')
    return client.db('vue-tracker').collection('incomes');
}

async function loadExpensesCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/')
    return client.db('vue-tracker').collection('expenses');
}

module.exports = router;
