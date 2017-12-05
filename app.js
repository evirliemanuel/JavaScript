var fs = require('fs');

var testing = fs.readFileSync('test.txt', 'utf8');

console.log(testing);