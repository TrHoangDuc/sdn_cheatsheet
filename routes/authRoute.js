var express = require('express');
const { login } = require('../controller/authController.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', login)

module.exports = router;
