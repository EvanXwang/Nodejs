//透過http 模組啟動 web server 服務
const http = require('http');

//導入config 設定檔
const config = require('./config').config;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //設定回應為text文件，並回應 Hello World
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url){
    case '/':
        res.end('hello world');
        break;
    case '/about':
        res.end('This is about page');
        break;
    case '/home':
        res.end('Welcome to my homepage');
        break;
    default:
        res.end('No information')
  }
});

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});