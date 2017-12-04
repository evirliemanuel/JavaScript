var express = require('express');

var app = express();

app.get('/home', function(request, response){
        response.send("This is Home page");
});

app.get('/profile', function(request, response){
    response.send("This is Profile page");
});

app.listen(3000, function(){
    console.log("Server is now running...");
});