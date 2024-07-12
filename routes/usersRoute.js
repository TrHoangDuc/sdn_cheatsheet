var express = require('express');
const { login, logout, getUsers } = require('../controller/UsersController.js');
const verifyJWT = require('../middleware/verifyJWT.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/login', function(req, res, next) {
//   res.send('Login ok');
// });

router.post('/login', login)

router.get('/logout', logout)

router.get('/all', verifyJWT, getUsers)

module.exports = router;
