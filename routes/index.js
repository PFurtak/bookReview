const express = require('express'),
  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('template', {
    locals: {
      title: 'Book Reviews'
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
