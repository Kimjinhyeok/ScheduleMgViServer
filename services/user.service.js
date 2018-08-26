
var UserModel = require('../models/user.model');
var Q = require('q');

exports.userRegister = async function(userData){
    var deferred = Q.defer();
    try{
        var newUser = new UserModel({
            isprivacy : userData.type === 'privacy' ? true : false,
            name : userData.name,
            password : userData.password,
            email : userData.email
        });
        newUser.save(function(err, res){
            if(err){
                throw Error(err);
            }else{
                deferred.resolve(true);
            }
        })
    }catch(e){
        deferred.reject(e);
    }

    return deferred.promise;
}

exports.checkDuplicationID = async function(name){
    var deferred = Q.defer();

    try{
        UserModel.find({name : name}, function(err, res){
            if(err){

            }else{
                if(res){
                    deferred.resolve({
                        isDuplicated : true
                    });
                }else{
                    deferred.resolve({
                        isDuplicated : false
                    })
                }
            }
        });
    }catch(e){
        deferred.reject(e);
    }
    return deferred.promise;
}

exports.getUserInfomation = async function(id){
    var deferred = Q.defer();

    try{
        UserModel.findOne(id, function(err, res){
            if(err){
                deferred.reject({
                    err : err
                });
            }else{
                if(res){
                    deferred.resolve({
                        res
                    });
                }else{
                    deferred.reject({
                        err : "some error apear while finding user's infomation"
                    });
                }
            }
        })
    }catch(e){
        throw new Error(e);
    }

    return deferred.promise;
}