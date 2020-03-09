const express = require('express'),
  router = express.Router(),
  bcrypt = require('bcryptjs'),
  userModel = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('template', {
    locals: { title: 'Register' },
    partials: {
      partial: 'partial-signup'
    }
  });
});
router.post('/register', function(req, res, next) {
  const { first_name, last_name, username, password, email } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = new userModel(
    null,
    first_name,
    last_name,
    username,
    email,
    hash
  );
  user.addUser();
  res.status(200).redirect('/');
});

module.exports = router;
