//讀取app模組 存成常數 app
const app = require('./app');

//啟動服務
//process.env 指的是從系統環境讀取PORT
const port = process.env.port || 3000;
app.listen(port,(err) =>{
    if(err) {
        console.log('錯誤囉，無法啟動');
    }
    console.log('正常服務中...','http://127.0.0.1:'+ port)
});