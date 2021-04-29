const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //使用pug 指向 views/page1.pug
    res.render('page1');
});

//等於同 http://127.0.0.1:3000/page1/1  路徑
router.get('/1', (req, res) => {
    //res.send('網頁-1-1');
    res.render('page1-1');
});

router.get('/2', (req, res) => {
    res.send('網頁-1-2');
});

//模組化
module.exports = router;