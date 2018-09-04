var router = require('express').Router();
var scheduleController = require('../controllers/schedule.controller');
var { verifyToken } = require('../routes/middlewares');

router.put('/', verifyToken, scheduleController.uploadSchedule);
router.put('/:id', verifyToken, scheduleController.updateSchedule);
router.get('/', verifyToken, scheduleController.getSchedule);
router.get('/all', verifyToken, scheduleController.getAllSchedules);
router.get('/activate/:id', verifyToken, scheduleController.getActivateSchedules);
router.delete('/:id', verifyToken, scheduleController.removeSchedule);
module.exports = router;