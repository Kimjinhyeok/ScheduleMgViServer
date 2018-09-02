var ScheduleModel = require('../models/schedule.model');
var Q = require('q');

_this = this;

exports.uploadSchedule = async function(data){
    var deferred = Q.defer();
    try{
        var newSch = new ScheduleModel({
            user : data.user,
            targetDay : data.targetDay,
            createDay : new Date(),
            descript : data.descript,
            plans : data.plans
        });
        
        var res = newSch.save(function(err, data){
            if(err){
                deferred.reject();
                throw Error(err);
            }else{
                deferred.resolve(true);
            }
        });
    }catch(e){
        deferred.reject(e);
        throw Error('Schedule Service : Error while input schedule....');
    }
    return deferred.promise;
}

exports.getSchedule = async function(){
    var deferred = Q.defer();
    try{
        console.log("Running Service");
        await ScheduleModel.findOne({}).sort('-targetDay').exec(function(err, res){
            if(err){
                deferred.reject(err.name + ": " + err.message);
                throw Error("Error while get Schedule by sort");
            }else{
                deferred.resolve({
                    schedule : res
                })
            }
        });
    }catch(e){
        throw Error("Error while get Schedule by sort");
    }
    return deferred.promise;
}

exports.getAllSchedules = async () => {
    var deferred = Q.defer();
    try{
        await ScheduleModel.find({}).sort('+targetDay').exec(
            function(err, res){
                if(err){
                    deferred.reject(err.name + ":" + err.message);
                    throw Error('Error while get Schedules');
                }else{
                    console.log("in service : " + res);
                    deferred.resolve({
                        value : res
                    })
                }
            }
        )
    }catch(e){
        deferred.reject(e);
        throw Error("Error while get Schedules");
    }
    return deferred.promise;
}

exports.getActivateSchedules = async (user) => {
    var deferred = Q.defer();
    try{

        // 10개 한정으로 가져오기
        ScheduleModel.find({user : user, activate : true}).limit(10).sort('targetDay')
        .exec(function(err, res){
            if(err){
                throw Error(err);
            }else{
                deferred.resolve(res);
            }
        });
            
    }catch(e){
        deferred.reject(e.message);
        throw Error("Error while get activate schedules");
    }

    return deferred.promise;
}

exports.updateSchedule = async (schedule) => {
    var deferred = Q.defer();

    try{
        await ScheduleModel.update({_id : schedule.id}, {
            'targetDay' : schedule.targetDay,
            'createDay' : schedule.createDay,
            '$set' : {"plans" : []}
        }, function(err, raw){
            if(err){
                deferred.reject(err);
            }else{
                ScheduleModel.findByIdAndUpdate(schedule.id,{
                    '$push' : {"plans" : schedule.plans}
                }, 
                    function(err, raw){

                })
                deferred.resolve(raw);
            }
        });
    }catch(e){
        deferred.reject(e);
    }

    return deferred.promise;
}

exports.removeSchedule = function(id){
    var deferred = Q.defer();

    try{
        ScheduleModel.deleteOne({_id : id}, (err) => {
            if(err){
                deferred.reject(err);
                throw Error(err);
            }else{
                deferred.resolve(true);
            }
        });
    }catch(e){
        deferred.reject(e.message);
        throw Error(err);
    }

    return deferred.promise;
}

// 등록된 유저(id)의 스케줄 중 activate되어 있는데 target날짜가 지난건 false로 한다.
exports.checkPassingDueDate = function(id){
    try{
        ScheduleModel.find({user : id},{targetDay : {$lt : new Date().setHours(0,0,0)}, activate : true})
        .update({}, {$set : {activate : false}}, {multi : true}, 
            function(err, res){
                if(err){
                    console.error(err);
                }else{
                    console.log(`#Schedules ${id}'s ${res.nModified}`);
                }
            });
    }catch(e){
        throw Error(e);
    }
}