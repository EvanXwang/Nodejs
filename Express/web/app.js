const express = require('express');

//讀取routes模組 存成常數 routes
const routes = require('./routes/index');
const routes1 = require('./routes/page1');
const routes2 = require('./routes/404');

const app = express();

//預設根路徑 指向./routes/index
app.use('/', routes);
app.use('/page1', routes1);
app.use('/404', routes2);

//模組化
module.exports = app;
