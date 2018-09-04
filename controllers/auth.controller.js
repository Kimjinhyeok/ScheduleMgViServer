var authService = require('../services/auth.service');
var scService = require('../services/schedule.service');
var jwt = require('jsonwebtoken');

exports.authUserLogin = function(req, res) {
    var name = req.body.name;
    var password = req.body.password;

    try{
        var promise = authService.authUserLogin(name, password);
        promise.then((resolve) =>  {
            //기한일(목표일)이 지난 일정을 비활성화 시킨다.
            let userID = resolve.id;
            scService.checkPassingDueDate(userID);
            var p = new Promise((resolve, reject) => {
                jwt.sign({
                    userID : userID,
                    userName : name
                },
                process.env.JWT_SECRET,
                {
                    expiresIn : '1h',
                    subject : process.env.JWT_SUBJECT,
                    issuer : process.env.JWT_ISSUER
                },(err, token) => {
                    if(err){
                        reject(err);
                    }else{
                        resolve(token);
                    }
                })
            });
            p.then(token => {      
                return res.status(200).json({
                    token : token
                })
            });
            p.catch(reject => {
                return res.status(400).json({
                    err : reject.err
                })
            })
        });
        promise.catch((err) => {
             return res.status(400).json({
                message : err
            });
        });
    }catch(e){
         return res.status(400).json({
            err : e
        });
    }
}

exports.authUserLogout = async function(req, res){

}