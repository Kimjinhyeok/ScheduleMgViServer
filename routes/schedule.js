var router = require('express').Router();
var scheduleController = require('../controllers/schedule.controller');

router.put('/', scheduleController.uploadSchedule);
router.put('/:id', scheduleController.updateSchedule);
router.get('/', scheduleController.getSchedule);
router.get('/all', scheduleController.getAllSchedules);
router.get('/activate/:id', scheduleController.getActivateSchedules);
router.delete('/:id', scheduleController.removeSchedule);
module.exports = router;