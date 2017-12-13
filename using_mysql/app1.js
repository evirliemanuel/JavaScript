const express = require('express');
const mysql = require('./mysql');
const app = express();

app.use('/test', mysql);
module.exports = app;