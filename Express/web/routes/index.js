const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('這是我的首頁!!');
})

//模組化
module.exports = router;