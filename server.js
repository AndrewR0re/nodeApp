/**
 * Created by 1305997 on 23/11/2015.
 */
var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("This is a test, bitch!\n");
    response.end('Hello World\n');
}).listen(port);
