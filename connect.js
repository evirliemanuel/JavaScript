var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response){
    console.log('User request profile');
}

function forum(request, response){
    console.log('User request forum');
}

function onRequest(request, response){

	if(request.method == 'GET' && request.url == '/' ){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	}else{
		send404Response(response);
	}
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running...sasa");

