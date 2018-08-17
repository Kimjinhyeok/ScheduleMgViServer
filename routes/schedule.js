var router = require('express').Router();
var scheduleController = require('../controllers/schedule.controller');

router.put('/', scheduleController.uploadSchedule);
router.put('/:id', scheduleController.updateSchedule);
router.get('/', scheduleController.getSchedule);
router.get('/all', scheduleController.getSchedules);
module.exports = router;