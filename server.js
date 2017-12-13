const http = require('http');

http.createServer(require('./app')).listen(8000, function(){
    console.log("Server is now running...");
});