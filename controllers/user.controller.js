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