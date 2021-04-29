const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1 style="color:red">這是我的首頁!!</h1><a href="page1"> Page1 </a> ');
})

//模組化
module.exports = router;