const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const expenseRouter = require('./router/expense');

const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true
});

app.use(bodyParser.json());

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('db connected successfully');
});

app.use('/expense',expenseRouter);

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
});