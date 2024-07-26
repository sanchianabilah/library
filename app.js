const express = require('express');
const path = require('path');
const logger = require('morgan');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');

const app = express();

// Set up middleware, routes, etc.
app.use(logger('dev'));
app.use(express.json()); // Middleware untuk parsing JSON
app.use(express.urlencoded({ extended: false }));
// Add more middleware and routes here
app.use('/auth', authRouter); 
app.use('/product', productRouter);

module.exports = app;
