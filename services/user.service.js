
var UserModel = require('../models/user.model');
var Q = require('q');

exports.userRegister = function(userData){
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