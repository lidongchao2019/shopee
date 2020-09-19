const express = require('express');
const goodsRouterHandler = require('../router_handler/goods');

const router = express.Router();

router.get('/goods/getlist', goodsRouterHandler.getlist);

router.get('/goods/getinfo', goodsRouterHandler.getinfo);

module.exports = router;