const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('pages1');
});

//等於同 http://127.0.0.1:3000/page1/1  路徑
router.get('/1', (req, res) => {
    res.send('pages1.1');
});

router.get('/2', (req, res) => {
    res.send('pages1.2');
});

//模組化
module.exports = router;