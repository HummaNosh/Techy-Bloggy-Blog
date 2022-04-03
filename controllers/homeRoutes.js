const router = require('express').Router();
const  User = require('../models');
const withAuth = require('../utils/auth');

// this will put the select (homepage) page on home

router.get('/', async (req, res) => {
  try {
  
    // Pass serialized data and session flag into template
    res.render('/',  {  
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}),
router.get('/all', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('all');
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  router.get('/createBlog', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
    res.render('createBlog');
  });

  module.exports = router;