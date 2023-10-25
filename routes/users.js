const express = require('express');
const router = express.Router();
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const { storeReturnTo } = require('../middleware');
const usersCont = require('../controllers/usersController');

router.route('/register')
    .get(usersCont.renderRegister)
    .post(catchAsync(usersCont.register));

router.route('/login')
    .get(usersCont.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), usersCont.login)

router.get('/logout', usersCont.logout)

module.exports = router;
