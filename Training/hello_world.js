//透過http 模組啟動 web server 服務
const http = require('http');

//設定服務監聽localhost:3000 (127.0.0.1:3000/
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //設定回應為text文件，並回應 Hello World
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});