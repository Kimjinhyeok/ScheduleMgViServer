var Q = require('q');
var UserModel = require('../models/user.model');

exports.authUserLogin = async function(name, password){

    var deferred = Q.defer();
    try{
        UserModel.findOne({
            name : name,
            password : password
        }, function(err, res){
            if(err){
                throw Error(err);
            }else{
                if(res == null){
                    throw Error("Can not find equal infomation");
                }else{
                    var id = res.id;
                    deferred.resolve({
                        id
                    })
                }
            }
        });
    }catch(e){
        deferred.reject(e);
    }

    return deferred.promise;
}