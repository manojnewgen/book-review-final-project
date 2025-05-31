// Simple in-memory database for testing
let books = [
  { id: 1, isbn: "978-0544003415", title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, isbn: "978-0439064873", title: "Harry Potter", author: "J.K. Rowling" }
];

exports.getBooks = (req, res) => {
  res.json(books);
};

exports.getBookByISBN = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
};

exports.searchBooks = (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = books.filter(
    book => book.title.toLowerCase().includes(query) || 
           book.author.toLowerCase().includes(query)
  );
  res.json(results);
};