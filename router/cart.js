const express = require('express');

const cartRouterHandler = require('../router_handler/cart');

const router = express.Router();

router.get('/cart/add', cartRouterHandler.add);

router.get('/cart/getlist', cartRouterHandler.getlist);

router.get('/cart/remove', cartRouterHandler.remove);

router.get('/cart/edit', cartRouterHandler.edit);

module.exports = router;