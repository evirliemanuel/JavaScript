var http = require('http');
var connect = require('connect');
var fs = require('fs');

var app = connect();

function profile(request, response){
    console.log("Profile");
}

function forum(request, response){
    console.log("Forum");
}
app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is now running...");