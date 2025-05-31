const Review = require('../models/Review');
const asyncHandler = require('express-async-handler');

// @desc    Get reviews for a book
// @route   GET /api/reviews/book/:bookId
// @access  Public
exports.getBookReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ book: req.params.bookId })
    .populate('user', 'username');
  res.json(reviews);
});

// @desc    Add a review
// @route   POST /api/reviews
// @access  Private
exports.addReview = asyncHandler(async (req, res) => {
  const { bookId, rating, comment } = req.body;
  
  // Check if user already reviewed this book
  const existingReview = await Review.findOne({
    book: bookId,
    user: req.user.id
  });
  
  if (existingReview) {
    return res.status(400).json({ message: 'You already reviewed this book' });
  }

  const review = await Review.create({
    book: bookId,
    user: req.user.id,
    rating,
    comment
  });

  res.status(201).json(review);
});

// @desc    Update a review
// @route   PUT /api/reviews/:id
// @access  Private
exports.updateReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  
  if (!review) {
    return res.status(404).json({ message: 'Review not found' });
  }

  // Check if the review belongs to the user
  if (review.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  review.rating = req.body.rating || review.rating;
  review.comment = req.body.comment || review.comment;

  await review.save();
  res.json(review);
});

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private
exports.deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  
  if (!review) {
    return res.status(404).json({ message: 'Review not found' });
  }

  // Check if the review belongs to the user
  if (review.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  await review.remove();
  res.json({ message: 'Review removed' });
});