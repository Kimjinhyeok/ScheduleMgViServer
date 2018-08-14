var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.json([{
    name : 'Chris',
  },{
      name : 'Sam'
    }
  ])
});

module.exports = router;


// exports.index =function(req, res, next){
//   res.status(200).json([{
//     name : 'Chris',
//   },{
//       name : 'Sam'
//     }
//   ])
// }
