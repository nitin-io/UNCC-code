const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer();

server.on("request", (request) => {
  const result = fs.readFileSync('test.txt');
  request.end(result);
});

server.listen(8080, '127.0.0.1', () => {
  console.log("Server started on ", server.address());
});