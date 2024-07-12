var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){
    res.render('dashboard', {user: req.session.user})
  }else{
    res.render('login', {error: null});
  }
});

module.exports = router;
