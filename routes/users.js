var express = require('express');
var userController = require('../controllers/user.controller');
var router = express.Router();
/* GET users listing. */

router.put('/', userController.userRegister);
router.get('/:name', userController.checkDuplicatedID);
module.exports = router;
