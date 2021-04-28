const express = require('express');
const app = express();

//設定預設路徑
app.get('/', (req, res) => {
    console.log('->', req.url); //在終端機列印路徑位置
    res.send('<h1>Hello</h1>'); //在網頁中顯示html訊息
});

//重定向路徑
app.get('/blog',(req, res) => {
    res.redirect('/');
});

//返回json格式，API主用
app.get('/json',(req, res) => {
   res.json({
        user:'evan',
        height:170
   })
});

//返回http狀態碼
app.get('/sitemap', (req, res) => {
    res.redirect(301, '/');
})

//返回404
app.get('/ng', (req, res) => {
    res.status(404).end();
})

//POST請求
//需安裝body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/login',(req, res) => {
    console.log(req.body)
    res.json({
        post_result:'ok',
        body:req.body,
    })
})



//啟動服務
//process.env 指的是從系統環境讀取PORT
const port = process.env.port || 3000;
app.listen(port,(err) =>{
    if(err) {
        console.log('錯誤囉，無法啟動');
    }
    console.log('正常服務中...','http://127.0.0.1:'+ port)
});