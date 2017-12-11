const http = require('http');
const module1 = require('./module1');
const module2 = require('./module2');


http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(module2.myVariable);
	module1.myFunction();
	response.end();
	
}).listen(8000, function(){
	console.log("Server is now running..");
});