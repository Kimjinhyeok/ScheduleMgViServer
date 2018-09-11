var express = require('express');
var userController = require('../controllers/user.controller');
var router = express.Router();
/* GET users listing. */

router.put('/', userController.userRegister);
router.post('/', userController.naver);
router.get('/chk/:name', userController.checkDuplicatedID);
router.get('/:id', userController.getUserInfomation);
module.exports = router;
