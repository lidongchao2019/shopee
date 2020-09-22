const express = require('express');
const router = express.Router();

const memberHandler = require('../routerHandler/member');

router.post('/member/register', memberHandler.register);
router.post('/member/login', memberHandler.login);

module.exports = router;