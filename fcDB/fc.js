#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end();
}).listen(8002, '192.168.1.170');
console.log('Server running at http://192.168.1.170:8002/');
