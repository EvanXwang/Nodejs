const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.get('/admin', function(req, res){
  res.send('Hello Admin');
})

app.get('/user', function(req, res){
  res.send('Hello User');
})

//middleware
app.use(function(req,res,next) {
  console.log('有人進入 USER Create 頁面');
  next();
})

//輸入一個沒有的 app，那麼你就會得到一個 404 頁面
app.use(function(req,res,next){
  res.status(404);
  res.send('404 畫面');
})

//程式碼錯誤呢?不要讓User直接看到程式內部代碼
app.use(function(err,req,res,next) { // 這邊可以看到多了一個 err
  res.status(500);
  res.send('程式碼出現錯誤');
})

app.get('/user/create', function(req, res){
  res.send('Hello Create User');
})

app.get('/user/username', function(req, res) {
  var name = req.query.name; // 取得使用者傳送的參數 (網址參數)
  res.send('Hello  UserName:' + name);// 然後打印出來
})

app.get('/user/:name', function(req, res) { // 透過分號 :name，可以自訂
  var name = req.params.name; // 取得路徑
  // req → request
  // res → response
  res.send('你現在查看的路徑是:' + name);// 然後打印出來
})


app.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`);
})