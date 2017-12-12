const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
	//propertiest..
	host : 'localhost',
	user : 'root',
	password: '',
	database: 'sampledatabase'
});
    connection.connect(function(error){
        if(!!error){
            console.log('Error');
        }else{
            console.log('Connected');
        }
    });
app.get('/test', (req, res, next)=>{
	connection.query("SELECT * FROM sampletable", function(error, rows, fields){
		if(!!error){
		console.log('Error in the query');
	}else{
		console.log('Sucesful');
		console.log(rows);
		console.log(rows[1]);
        console.log(rows[1].username);
        res.json(rows[1].username);
	}
	});
});

module.exports = app;