var scheduleService = require('../services/schedule.service');
var ScheduleVO = require('../data-unit/schedule.vo');

exports.uploadSchedule = async function(req, res, next) {
    
    var params = req.body.params;

    var newSchedule = new ScheduleVO(
        params.id,
        params.targetDay,
        params.plans,
        params.descript
    );

    try{
        if(!newSchedule.getValid()) {
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

exports.getAllSchedules = async function(req, res, next){
    try{
        var schedulePromise = scheduleService.getAllSchedules();
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

exports.getActivateSchedules = async function(req, res){
    try{
        var promise = scheduleService.getActivateSchedules();
        promise.then((data) => {
            res.status(200).json({
                data
            })
        });
        promise.catch((err) => {
            throw Error(err);
        });
    }catch(e){
        return res.status(400).json({
            error : e
        })
    }
}

exports.updateSchedule = async function(req, res, next){

    var params = req.body.params;
    var schedule = {
        id : params._id,
        targetDay : params.targetDay,
        descript : params.descript,
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

exports.removeSchedule = function(req, res, next){
    var id = req.params.id;

    try{
        var promise = scheduleService.removeSchedule(id);

        promise.then( (result) => {
            return res.json({
                result
            })
        });
        promise.catch((err) => {
            return res.status(400).json({
                err : err
            })
        });
    }catch(e){
        return res.status(400).json({
            err : e.message
        })
    }
}