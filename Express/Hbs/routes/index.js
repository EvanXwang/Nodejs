var express = require('express');
var router = express.Router();
// 安裝npm install express-validator --save
const {check, validationResult } = require ('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  //將表單的姓名欄位列印出來
  console.log(req.body);
  //res.render('index', { title: 'Express' });
  res.render('index', { title: 'Express',userInput:req.body });
});

module.exports = router;
