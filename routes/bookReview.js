const express = require('express'),
  router = express.Router(),
  bookModel = require('../models/bookModel');

router.get('/:id?', async (req, res, next) => {
  const id = req.params.id;
  const data = await bookModel.getById(id);
  const rev = await bookModel.getRevById(id);

  res.render('template', {
    locals: {
      title: data[0].title,
      data: data,
      rev: rev
    },
    partials: {
      partial: 'partial-reviews'
    }
  });
});

module.exports = router;
