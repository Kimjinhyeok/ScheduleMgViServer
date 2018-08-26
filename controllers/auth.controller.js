var authService = require('../services/auth.service');

exports.authUserLogin = async function(req, res) {
    var name = req.body.name;
    var password = req.body.password;

    try{
        var promise = authService.authUserLogin(name, password);
        promise.then((id) => {
            res.status(200).json({
                id : id
            })
        });
        promise.catch((err) => {
            res.status(400).json({
                message : err
            });
        });
    }catch(e){
        res.status(400).json({
            err : e
        });
    }
}

exports.authUserLogout = async function(req, res){

}