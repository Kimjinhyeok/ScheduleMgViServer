var ScheduleModel = require('../models/schedule.model');
var Q = require('q');

_this = this;

exports.uploadSchedule = async function(data){
    var deferred = Q.defer();
    try{
        var newSch = new ScheduleModel();
        
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

exports.getSchedules = async () => {
    var deferred = Q.defer();
    try{
        await ScheduleModel.find({}).sort('-targetDay').exec(
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