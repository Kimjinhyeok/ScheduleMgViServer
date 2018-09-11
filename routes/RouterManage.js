var express = require('express');
var router = express.Router();
var indexRouter = require('./index');
var usersRouter = require('./users');
var scheduleRouter = require('./schedule');
var authRouter = require('./auth');
var oauthRouter = require('./oauth');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/schedule', scheduleRouter);
router.use('/auth', authRouter);
router.use('/oauth', oauthRouter);
module.exports = router;