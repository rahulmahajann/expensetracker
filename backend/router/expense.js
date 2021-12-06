const express = require('express');
const Expense = require('../model/expenseModel');

const router = express.Router();

router.get('/',(req, res) => {
    Expense.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.post('/addExpense', (req, res) => {
    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;

    const newExpense = new Expense({
        name,
        amount,
        date
    });

    newExpense.save()
        .then(() => res.json('expense added successfully'))
        .catch( err => res.status(400).json('Error: ' + err))

});

module.exports = router;