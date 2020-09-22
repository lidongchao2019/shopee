const express = require('express');
const goodsHandler = require('../routerHandler/goods');

const router = express.Router();

router.get('/goods/getlist', goodsHandler.getlist);
router.get('/goods/getinfo', goodsHandler.getinfo);

module.exports = router;