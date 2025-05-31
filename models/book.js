const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  isbn: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  publishedDate: Date,
  price: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);