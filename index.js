var express = require('express');

var app = express();

app.get('/home', function(request, response){
        response.send("This is Home page");
});

app.get('/profile', function(request, response){
    response.send("This is Profile page");
});

var students = {
    1 : 'Rafael',
    name : 'Ronald' ,
    age : 16
}
app.get('/student/:id', function(request, response){
    response.send("you have request to see student name :" + students[request.params.id] );
});
app.listen(3000, function(){
    console.log("Server is now running...");
});