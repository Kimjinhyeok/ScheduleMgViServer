var scheduleService = require('../services/schedule.service');
var ScheduleVO = require('../data-unit/schedule.vo');
exports.uploadSchedule = async function(req, res, next) {
    
    var newSchedule = new ScheduleVO();
    var params = req.body.params;

    newSchedule.targetDay = params.targetDay ? params.targetDay : null;
    newSchedule.plans = params.plans ? params.plans : null;
    newSchedule.createDay = params.createDay ? params : null;
    
    try{
        if(newSchedule.plans == null || newSchedule.targetDay == null) {
            throw Error("Parameter Error!");
        }
        var result = await scheduleService.uploadSchedule(newSchedule);

        return res.status(200).json({
            value : result
        });
    }catch(e){
        return res.status(400).json({
            error : e.message
        })
    }
}