const express = require('express');
const app = express();

const productRouts = require('./api/routes/products');
const ordersRouts = require('./api/routes/orders');

app.use('/products', productRouts);
app.use('/orders', ordersRouts);

app.use((request, response, next)=>{
    response.status(200).json({
        message: 'Something Wrong'
    });
});

module.exports = app;