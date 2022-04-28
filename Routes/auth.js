const express = require('express')
const { register, login, dummy, updateUser, getUser } = require('../controllers/auth')
const authMid = require('../middleware/auth')
const router = express.Router()


// added
const passport = require('passport')


router.route('/login').post(login)
router.route('/register').post(register)
router.route('/protected').get(authMid.authenticate, dummy)
router.route('/:id').put(authMid.authenticate, updateUser)
router.route('/me').get(authMid.authenticate, getUser);

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
module.exports = router