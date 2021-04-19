//透過http 模組啟動 web server 服務
const http = require('http');

//導入config 設定檔
const config = require('./config').config;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //設定回應為text文件，並回應 Hello World
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});