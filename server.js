const http = require('node:http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

if (require.main === module) {
  server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = server;