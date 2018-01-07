const express = require('express');
const app = express();

app.get('/test', function(){
	console.log("Test running..");
});gg

app.post('/',function(request, response, next){
    users.id = request.body.id;
    users.username = request.body.username;
    users.password = request.body.password;

    response.status(201).json(users);
	
	console.log("data saved");
});xx
xx
xx
xx
zz
app.listen(4000, function(){
	console.log("listen is now running...");
});