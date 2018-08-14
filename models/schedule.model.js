var mongoose = require('mongoose');
var ScheduleVO = require('../data-unit/schedule.vo');
var plans = require('../data-unit/plan.vo');

var ScheduleSchema  = new mongoose.Schema({
    targetDay : Date,
    plans : Array,
    createDay : Date
})

const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);

module.exports = ScheduleModel;