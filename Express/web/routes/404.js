const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(404).end();
})

//模組化
module.exports = router;