var http = require("http");
var server = http.createServer(function(req,res) {
  console.log(`Request was made: ${req.url}`);
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end("Hey ninjas");
});

server.listen(3000, "localhost");
console.log("yo dawgs, now listening to port 3000");
