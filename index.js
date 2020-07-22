"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer();
server.on('request', function (req, res) {
    req.resume();
    res.end('Hello, world!');
});
server.listen(8000);
console.log('Server is listening at http://localhost:8000/');
