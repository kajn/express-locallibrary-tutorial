var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource OK');
});

router.get('/cool', function(req, res, next) {
  res.send('Tres cool');
});

module.exports = router;
