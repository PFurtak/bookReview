const express = require('express'),
  bookModel = require('../models/bookModel'),
  router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await bookModel.getAllBooks();

  res.render('template', {
    locals: {
      title: 'Book Reviews',
      data: data
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
