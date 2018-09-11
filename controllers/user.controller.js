var userService = require('../services/user.service');
var encryptor = require('../modules/encryptor');

exports.userRegister = async function (req, res) {
    var params = req.body.formValue;
    try{
        user = {
            type : params.type,
            name : params.name,
            password : params.password,
            email : params.email
        }
        userEncryptInfo = encryptor.setSaltHashPassword(user.password);
        user.salt = userEncryptInfo.salt;
        user.password = userEncryptInfo.passwordHash;

        var userData = await userService.userRegister(user);
        res.status(200).json({
            result : userData
        })
    }catch(e){
        res.status(400).json({
            err : e.message
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

exports.naver = async (req,res) => {
    code = req.query.code;
    state = req.query.state;
    /*api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
     };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });*/
    res.state(200).json({
        message : '받기만함'
    });
}