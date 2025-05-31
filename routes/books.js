const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBookByISBN,
  searchBooks
} = require('../controllers/books');

router.get('/', getBooks);
router.get('/isbn/:isbn', getBookByISBN);
router.get('/search', searchBooks);

module.exports = router;