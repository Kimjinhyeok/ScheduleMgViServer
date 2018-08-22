var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth.controller');
router.post('/', authController.authUserLogin);
router.delete('/', authController.authUserLogout);

module.exports = router;