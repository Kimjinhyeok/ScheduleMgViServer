var express = require('express');
var router = express.Router();
var indexRouter = require('./index');
var usersRouter = require('./users');
var scheduleRouter = require('./schedule');
var authRouter = require('./auth');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/schedule', scheduleRouter);
router.use('/auth', authRouter);
module.exports = router;