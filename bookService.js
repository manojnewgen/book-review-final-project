const axios = require('axios');
const API_BASE_URL = 'http://localhost:5000/api/books'; // Your API base URL

// Task 10: Get all books using async/await
async function getAllBooks() {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all books:', error.message);
    throw error;
  }
}

// Task 11: Search by ISBN using Promises
function searchByISBN(isbn) {
  return new Promise((resolve, reject) => {
    axios.get(`${API_BASE_URL}/isbn/${isbn}`)
      .then(response => resolve(response.data))
      .catch(error => {
        console.error('Error searching by ISBN:', error.message);
        reject(error);
      });
  });
}

// Task 12: Search by Author using async/await
async function searchByAuthor(author) {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { author }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching by author:', error.message);
    throw error;
  }
}

// Task 13: Search by Title using Promises
function searchByTitle(title) {
  return new Promise((resolve, reject) => {
    axios.get(`${API_BASE_URL}/search`, {
      params: { title }
    })
    .then(response => resolve(response.data))
    .catch(error => {
      console.error('Error searching by title:', error.message);
      reject(error);
    });
  });
}

module.exports = {
  getAllBooks,
  searchByISBN,
  searchByAuthor,
  searchByTitle
};