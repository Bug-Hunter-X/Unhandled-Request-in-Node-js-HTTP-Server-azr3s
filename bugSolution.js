const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  console.log('Request received and responded to');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});