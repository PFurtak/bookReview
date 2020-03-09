const express = require('express'),
  router = express.Router(),
  bcrypt = require('bcryptjs'),
  userModel = require('../models/userModel');

router.get('/register', function(req, res, next) {
  res.render('template', {
    locals: { title: 'Register' },
    partials: {
      partial: 'partial-signup'
    }
  });
});

router.get('/login', function(req, res, next) {
  res.render('template', {
    locals: {
      title: 'Login'
    },
    partials: {
      partial: 'partial-login'
    }
  });
});
router.post('/login', async function(req, res, next) {
  const { email, password } = req.body;

  const user = new userModel(null, null, null, null, email, password);
  const loginResponse = await user.loginUser();
  console.log('login response is', loginResponse);

  if (!!loginResponse.isValid) {
    req.session.is_logged_in = loginResponse.isValid;
    req.session.id = loginResponse.id;
    req.session.first_name = loginResponse.first_name;
    req.session.last_name = loginResponse.last_name;

    res.redirect('/');
  } else {
    res.sendStatus(403);
  }
});

router.post('/register', function(req, res, next) {
  const { first_name, last_name, username, email, password } = req.body;

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
