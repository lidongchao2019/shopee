const express = require('express');

const memberRouterHandler = require('../router_handler/member');

const router = express.Router();

router.get('/member/register', memberRouterHandler.register);

router.get('/member/login', memberRouterHandler.login);

module.exports = router;