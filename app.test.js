const http = require('http');
const server = require('./server');

describe('Hello World Server', () => {
  // Start server before tests
  beforeAll((done) => {
    server.listen(3000, () => {
      done();
    });
  });

  // Close server after tests
  afterAll((done) => {
    server.close(done);
  });

  test('should return 200 status code and Hello World message', (done) => {
    http.get('http://localhost:3000', (res) => {
      let data = '';
      
      expect(res.statusCode).toBe(200);
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        expect(data).toContain('Hello, World! This response is from pod:');
        done();
      });
    });
  });

});


