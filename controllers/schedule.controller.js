var scheduleService = require('../services/schedule.service');
var ScheduleVO = require('../data-unit/schedule.vo');

exports.uploadSchedule = async function(req, res, next) {
    
    var newSchedule = new ScheduleVO();
    var params = req.body.params;

    newSchedule.targetDay = params.targetDay ? new Date(params.targetDay) : null;
    newSchedule.plans = params.plans ? params.plans : null;
    newSchedule.createDay = new Date();
    
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

exports.getSchedule = async function(req, res, next){
    try{
        schedulePromise = scheduleService.getSchedule();
        schedulePromise.then(schedule =>{
            return res.status(200).json({
                value : schedule
            });
        })
        schedulePromise.catch(err =>{
            return res.status(400).json({
                error : err.message
            }); 
        });
    }catch(e){
        return res.status(400).json({
            error : e.message
        });
    }
}

exports.getSchedules = async function(req, res, next){
    try{
        var schedulePromise = scheduleService.getSchedules();
        schedulePromise.then( schedules => {
            return res.json({
                schedules
            })
        });
        schedulePromise.catch( err => {
            return res.status(400).json({
                error : err.message
            }); 
        })
    }catch(e){
        return res.status(400).json({
            error : err.message
        }); 
    }
}

exports.updateSchedule = async function(req, res, next){

    var params = req.body.params;
    var schedule = {
        id : params._id,
        targetDay : params.targetDay,
        createDay : new Date(),
        plans : params.plans
    }
    try{
        var schedulePromise = scheduleService.updateSchedule(schedule);
        schedulePromise.then( () => {
            return res.json({
                result : true
            })
        });
        schedulePromise.catch( (err) =>{
            return res.status(400).json({
                error : err.message
            })
        });
    }catch(e){

    }
}