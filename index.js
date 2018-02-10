const express = require('express');
const app = express();

app.get('/', function(request, response){
    console.log("Get request");
    response.end();
});

app.listen(4000, function(){
	console.log("server is now running...");
});