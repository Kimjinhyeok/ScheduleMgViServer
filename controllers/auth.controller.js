var authService = require('../services/auth.service');
var scService = require('../services/schedule.service');
var jwt = require('jsonwebtoken');

exports.authUserLogin = async function(req, res) {
    var name = req.body.name;
    var password = req.body.password;

    try{
        var promise = authService.authUserLogin(name, password);
        promise.then( (resolve) =>  {
            //기한일(목표일)이 지난 일정을 비활성화 시킨다.
            scService.checkPassingDueDate(resolve.id);
            jwt.sign({
                userID : resolve.id,
                userName : name
            },
            'abcd1234',
            {
                expiresIn : '7d',
                subject : 'userInfo',
                issuer : 'kjh'
            },(err, res) => {
                if(err){
                    return res.status(400).json({
                        err : err
                    })
                }else{
                    return res.status(200).json({
                        id : id
                    })
                }
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