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

app.get('/', function(request, response){
		connection.getConnection(function(error, tempCont){
		if(!!error){
			tempCont.release();
			console.log('Error');
		}else{
			console.log('Connected!');
			tempCont.query("SELECT * FROM sampletable", function(error, rows, fields){
				tempCont.release();
					if(!!error){
						console.log('Error in query');
					}else{
						response.json(rows);
					}
			});
		}
	});
})
app.listen(1337);