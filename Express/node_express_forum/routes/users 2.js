var express = require('express');
var router = express.Router();

// 定义主页的路由
router.get('/', function(req, res, next) {
  res.render('index', { title: 'user' }); // 加载index.ejs模板并传递数据给模板
});

router.get('/reg', function(req, res, next) {
  res.render('index', { title: 'reg' });
});

module.exports = router;
