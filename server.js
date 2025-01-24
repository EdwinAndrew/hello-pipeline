const http = require('node:http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const podName = process.env.POD_NAME || 'unknown';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello, World! This response is from pod: ${podName}\n`);
});

if (require.main === module) {
  server.listen(port, hostname, () => {
    console.log(`Server running on port ${port} in pod ${podName}`);
  });
}

module.exports = server;