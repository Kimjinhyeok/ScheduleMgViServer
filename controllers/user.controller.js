var userService = require('../services/user.service');

exports.userRegister = async function (req, res) {
    var params = req.body.params;
    try{
        user = {
            type : params.type,
            name : params.name,
            password : params.password,
            email : params.email
        }
        var promise = userService.userRegister(user);
        promise.then((rs)=>{
            res.status(200).json({
                result : rs
            })
        });
        promise.catch((err)=>{
            throw Error(err);
        });
    }catch(e){
        res.status(400).json({
            err : e
        })
    }    
}

exports.checkDuplicatedID = async function(req, res){
    var name = req.params.name;

    try{
        var promise = userService.checkDuplicationID(name);
        promise.then((rs)=>{
            res.json({
                status : 200,
                isDuplicated : rs.isDuplicated
            });
        }).catch((err)=>{
            res.json({
                status : 400,
                isDuplicated : null
            })
        })
    }catch(e){
        throw Error(e);
    }
}

exports.getUserInfomation = async function(req, res){
    var id = req.params.id;

    try{
        var promise = userService.getUserInfomation(id);
        promise.then((rs) => {
            res.json({
                status : 200,
                data : rs
            })
        }).catch((err) => {
            res.json({
                status : 400,
                err : err
            })
        });
    }catch(e){
        res.json({
            status : 400,
            err : e
        })
    }
}