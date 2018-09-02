var should = require('should');
var jwt = require('jsonwebtoken');
var secretKey = "abcdef123456$#";
var user = {
    'id' : '0584854a5b5c4d5',
    'name' : 'nick'
}
describe('test jwt token', ()=>{
    it('create tokoen', async ()=>{
         await jwt.sign(
            {
                id : user.id,
                name : user.name
            },
            secretKey,
            {
                expiresIn : '7d',
                subject : 'userInfo',
                issuer : 'kjh'
            },(err, res) => {
                if(err){
                    console.error(err);
                }else{
                    console.log(res);
                }
            }
        )
    })
})