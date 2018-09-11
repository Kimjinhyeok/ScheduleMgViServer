var router = require('express').Router();

var client_id = 'V657NSJJEvo_iyS8O9UG';
var redirectURI = 'http://localhost:3000/oauth/callback';
var state = 230;
var api_url = "";

router.get('/naverLogin', function(req, res){
   res.json({
       state : 200
   });
});

router.post('/callback', function(req, res, ){
    console.log(req);
});
module.exports = router;