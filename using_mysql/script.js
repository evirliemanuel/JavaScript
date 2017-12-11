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
app.get('/', function(req, res){
	connection.query("SELECT * FROM sampletable", function(error, rows, fields){
		if(!!error){
		console.log('Error in the query');
	}else{
		console.log('Sucesful');
	}
	});
})
app.listen(1337);