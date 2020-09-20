const express = require('express');
const router = express.Router();

const memberHandler = require('../routerHandler/member');

router.get('/member/register', memberHandler.register);
router.get('/member/login', memberHandler.login);

module.exports = router;