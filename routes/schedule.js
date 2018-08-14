var router = require('express').Router();
var scheduleController = require('../controllers/schedule.controller');

router.put('/', scheduleController.uploadSchedule);

module.exports = router;