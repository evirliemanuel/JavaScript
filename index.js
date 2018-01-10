const express = require('express');
const app = express();

app.get('/', function(request, response){
    console.log("Get request");
    response.end();
});

app.post('/',function(request, response, next){
    users.id = request.body.id;
    users.username = request.body.username;
    users.password = request.body.password;

    response.status(201).json(users);
	
	console.log("data saved");
	zz
	zz
});
app.listen(4000, function(){
	console.log("listen is now running...");
});