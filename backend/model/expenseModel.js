const mongoose = require('mongoose');

const schema = mongoose.Schema;

const expenseSchema = new schema({
    name:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;