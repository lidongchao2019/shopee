const express = require('express');

const router = express.Router();

const goodsHandler = require('../routerHandler/goods');
router.get('/goods/getlist', goodsHandler.getlist);
router.get('/goods/getinfo', goodsHandler.getinfo);

module.exports = router;