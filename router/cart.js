const express = require('express');
const router = express.Router();

const cartHandler = require('../routerHandler/cart');

router.get('/cart/add', cartHandler.add);
router.get('/cart/getlist', cartHandler.getlist);
router.get('/cart/remove', cartHandler.remove);
router.get('/cart/edit', cartHandler.edit);

module.exports = router;