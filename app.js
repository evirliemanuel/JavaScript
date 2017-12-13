const express = require('express');
const app = express();

function onrequest(){
    console.log("SUCCES");
}

app.use(onrequest);

module.exports = app;