const http = require('http');
const app1 = require('./app1');

http.createServer(app1).listen(8000, function(){
    console.log("Server is now running...");
});