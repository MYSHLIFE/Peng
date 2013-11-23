var fs = require('fs');
// var config=JSON.parse(fs.readFileSync("config.json"));
console.log('abc')
var config = {
	'host': "127.0.0.1",
	'port': "8080"
}
console.log(config)
var host = config.host;
var post = config.port;
var express = require('express');
var app = express.createServer();
app.ge("/", function(request, response) {
	response.send('hello,si');
})
app.listen(post, host);