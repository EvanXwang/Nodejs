const express = require('express');

//讀取routes模組 存成常數 routes
const routes = require('./routes/index');
const routes1 = require('./routes/page1');
const routes2 = require('./routes/404');
const path = require('path');

const app = express();
//pug 預設找尋的文件目錄為views
app.set('views', path.join(__dirname, 'views'));
//設定 view engine 為 pug
app.set('view engine', 'pug' );


//預設根路徑 指向./routes/index
app.use('/', routes);
app.use('/page1', routes1);
app.use('/404', routes2);

//模組化
module.exports = app;
