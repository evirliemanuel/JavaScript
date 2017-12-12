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

function testFunction(request, response){

	connection.connect(function(error, tempConnection){
		if(!!error){
			tempConnection.release();
			console.log('Error');
		}else{
			console.log('Connected');
			tempConnection.query("SELECT * FROM sampletable", function(error, rows, fields){
				tempCont.release();
					if(!!error){
						console.log('Error in query');
					}else{
						response.json(rows);
					}
			});
		}
	});

}

app.get('/test', testFunction);
app.listen(8080, function(){
	console.log("Server is now running...");
});