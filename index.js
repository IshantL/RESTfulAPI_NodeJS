// primary file for the API

//Dependencies
var http = require('http');
var url = require('url');
var StringDecoder= require('string_decoder').StringDecoder;

// The server should respond to all requests with a string 

var server = http.createServer(function(req,res){

//get the url and parse it
var parsedUrl=url.parse(req.url,true);

//get the path
var path = parsedUrl.pathname;
var trimmedPath = path.replace(/\/+|\/+$/g,'');

//Get the query string as an object 
var queryString = parsedUrl.query;

//Get the HTTP method
var method= req.method.toLowerCase();

//gets the headers as an object
var headers= req.headers;


//log for headers
console.log('headers',headers);

//get the payload if any
var decoder = new StringDecoder('utf-8');
var buffer = '';
req.on('data',function(data){
    buffer += decoder.write(data);
});
req.on('end',function(){
    buffer += decoder.end();
   //send the response
    res.end('Hello World\n');

//log the request path
console.log('request is recieved on path:'+trimmedPath+' with method:'+method+'with query param',queryString);

//log the payload
console.log('request is recieved with payload:',buffer);

});
});
//Start the server , and have it listen to port 3000

server.listen(3000,function(){
    console.log("Server is listening on port 3000 now");
});