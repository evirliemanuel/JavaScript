var fs = require('fs');

var testing = fs.readFileSync('test.txt', 'utf8');
fs.writeFileSync('test2.txt', "testing");
