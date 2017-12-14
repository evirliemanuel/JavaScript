const express = require('express');
const app = express();
const morgan = require('morgan');

const productRouts = require('./api/routes/products');
const ordersRouts = require('./api/routes/orders');

app.use(morgan('dev'));

app.use('/products', productRouts);
app.use('/orders', ordersRouts);

app.use((request, response, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, request, response, next)=>{
    response.status(error.status || 500);
    response.json({
        error:{
            message: error.message
        }
    });
});



// Routes which should request
app.use((request, response, next)=>{
    response.status(200).json({
        message: 'Something Wrong'
    });
});

module.exports = app;