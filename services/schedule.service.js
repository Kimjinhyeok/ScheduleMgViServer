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
        return res;
    }catch(e){
        deferred.reject(e);
        throw Error('Schedule Service : Error while input schedule....');
    }
}