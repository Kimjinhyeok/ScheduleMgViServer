var express = require('express');
var router = express.Router();
var indexRouter = require('./index');
var usersRouter = require('./users');
var scheduleRouter = require('./schedule');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/schedule', scheduleRouter);
module.exports = router;