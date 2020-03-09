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

/* POST review to db */
router.post('/', async function(req, res) {
  const { bookid, review_title, review_text } = req.body;
  const postData = await bookModel.addReview(bookid, review_title, review_text);
  console.log(postData);
  res.sendStatus(200);
});

module.exports = router;
