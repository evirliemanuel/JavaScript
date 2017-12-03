var http = require('http');
var connect = require('connect');
var fs = require('fs');

var app = connect();

function doFirst(request, response,next){
    console.log("Verly");
    next();
}

function doSecond(request, response,next){
    console.log("Ivy");
}
app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is now running...");