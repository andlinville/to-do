var express = require('express');
var router = express.Router();

var items = [
  {
    title: 'Copy key',
  },
  {
    title: 'Pick up drycleaning',
  },
  {
    title: 'Shop for groceries'
  }
]

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'To Do', items: items });
});

module.exports = router;
