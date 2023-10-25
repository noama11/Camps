const express = require('express');
const router = express.Router({ mergeParams: true }); // set it to true to enable the use of the camp's ID in these functions.

const Campground = require('../models/campground');
const Review = require('../models/review');

const { reviewSchema } = require('../schemas.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');


const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');
const reviewsCont = require('../controllers/reviewsController');





router.post('/', isLoggedIn, validateReview, catchAsync(reviewsCont.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviewsCont.deleteReview))

module.exports = router;