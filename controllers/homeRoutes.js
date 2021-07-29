const router = require('express').Router();
const { Favorites, Users } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    res.render('home');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
});



router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router