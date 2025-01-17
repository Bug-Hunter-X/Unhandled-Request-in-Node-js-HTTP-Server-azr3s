const http = require('http');

const server = http.createServer((req, res) => {
  // This line is missing a response
  console.log('Request received');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});