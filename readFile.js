var fs = require('fs');

var readFile = fs.readFile('test.txt', 'utf8', function(err, data){
    if (err)
       return console.error(err);
    console.log(data);
});