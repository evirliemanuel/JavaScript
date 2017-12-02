var http = require('http');

function onResquest(request, response){
    console.log("User made a request", request.url);
    response.writeHead(200, {"Context-Type" : "text/plain"});
    response.write("Here some data");
    response.end();
}

http.createServer(onResquest).listen(8080);
console.log("Server is now running...");

