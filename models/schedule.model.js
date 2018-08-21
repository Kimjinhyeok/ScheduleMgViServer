var mongoose = require('mongoose');
var ScheduleVO = require('../data-unit/schedule.vo');
var plans = require('../data-unit/plan.vo');

var ScheduleSchema  = new mongoose.Schema({
    targetDay : {type : Date, require : true },
    descript : {type : String},
    plans : {type : Array, require : true },
    createDay : {type : Date, require : true },
    activate : {type : Boolean, default : true}
})

const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);

module.exports = ScheduleModel;