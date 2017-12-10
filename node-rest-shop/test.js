const http = require('http');
const express = require('express');
const app = express();

function onRequest(request, response){
        response.status(200).json({
            message : 'It works',
            test : {
                test1: 'test1',
                test2 : 'test2'
            }
        });
        console.log("Get it");
}

app.use(onRequest);
http.createServer(app).listen(8080, function(){
    console.log("Server is running test...");
});