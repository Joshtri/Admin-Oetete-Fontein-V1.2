var express = require('express');
const { isLoggedIn } = require('../middlewares/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', isLoggedIn,  function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;