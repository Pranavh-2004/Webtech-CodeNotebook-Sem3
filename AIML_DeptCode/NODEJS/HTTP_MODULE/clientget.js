// Execute Server program serverget.js, then execute client program clientget.js

var http = require('http');
var options = {
	host:'localhost',
	port:'8080',
	path:'/index.html',
	method:'GET'
};
var callback = function(response){
	var body = '';
	response.on('data',function(data){
		body+=data;
	})
	.on('end',function(){
		console.log(body);
	});
}
var req = http.request(options,callback);
req.end();

