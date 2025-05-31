# Final Project: Book Review Application

## Project Structure
```
book-review-final-project/
├── server.js                  # Main server file
├── package.json              # Dependencies and scripts
├── .gitignore               # Git ignore file
├── README.md                # Project documentation
├── router/                  # Route handlers (optional organization)
│   ├── auth.js             # Authentication routes
│   ├── books.js            # Book-related routes
│   └── reviews.js          # Review-related routes
├── middleware/              # Custom middleware
│   └── auth.js             # Authentication middleware
├── data/                   # Initial data
│   └── books.js           # Pre-loaded book data
├── tests/                  # Test files
│   ├── auth.test.js       # Authentication tests
│   ├── books.test.js      # Book API tests
│   └── reviews.test.js    # Review API tests
├── postman/                # Postman collections
│   └── Book-Review-API.postman_collection.json
└── docs/                   # Documentation
    ├── API-Documentation.md
    └── Setup-Instructions.md
```

## Part A: Fork and Clone Instructions

### Step 1: Fork the Repository
1. Navigate to the provided Git repository URL
2. Click the "Fork" button to create your own copy
3. This creates a copy in your GitHub account

### Step 2: Clone to Theia Environment
```bash
# Replace YOUR_USERNAME with your GitHub username
git clone https://github.com/YOUR_USERNAME/book-review-final-project.git
cd book-review-final-project
```

## Part B: Package Installation and Postman Setup

### Step 1: Install Dependencies
```bash
# Navigate to the express server directory
cd book-review-final-project

# Install all required packages
npm install

# Install development dependencies
npm install --save-dev nodemon jest supertest
```

### Step 2: Postman Setup
1. Go to https://www.postman.com/
2. Click "Sign Up" or "Sign In"
3. Use your Google credentials to register/login
4. Import the provided collection file from `/postman/` directory
5. Set environment variables:
   - `baseUrl`: `http://localhost:5000`
   - `token`: (will be set automatically after login)

## Part C: Authentication Implementation Tasks

### Task C1: JWT Authentication
- ✅ Implement JWT token generation on login
- ✅ Create middleware to verify JWT tokens
- ✅ Protect specific endpoints with JWT authentication

### Task C2: Session Authentication  
- ✅ Implement express-session middleware
- ✅ Create session-based login/logout
- ✅ Protect specific endpoints with session authentication

### Task C3: Access Restrictions
- ✅ General users: Can view all books and reviews
- ✅ Registered users only: Can add/modify/delete reviews
- ✅ Users can only modify their own reviews

## Part D: User Access Implementation

### General User Access (No Authentication)
- ✅ GET `/books` - Retrieve all books
- ✅ GET `/books/isbn/:isbn` - Get book by ISBN
- ✅ GET `/books/author/:author` - Get books by author
- ✅ GET `/books/title/:title` - Get books by title
- ✅ GET `/books/:id/reviews` - Get reviews for a book

### Registered User Access (Authentication Required)
- ✅ POST `/register` - User registration
- ✅ POST `/login` - JWT login
- ✅ POST `/session/login` - Session login
- ✅ POST `/books/:id/reviews` - Add review (JWT auth)
- ✅ PUT `/books/:bookId/reviews/:reviewId` - Update review (JWT auth)
- ✅ DELETE `/books/:bookId/reviews/:reviewId` - Delete review (Session auth)

## Part E: Async/Await and Promises Implementation

### CRUD Operations with Different Patterns:
1. **Retrieve all books**: Uses `async/await` pattern
2. **Search by ISBN**: Uses `Promises` with `.then()/.catch()`
3. **Search by Author**: Uses `Promises` with `.then()/.catch()`
4. **Search by Title**: Uses `Promises` with `.then()/.catch()`

### Testing Workflow:
1. Start the server: `npm run dev`
2. Open Postman
3. Test authentication endpoints first
4. Test book retrieval endpoints
5. Test review management endpoints
6. Verify concurrent access capabilities

## Pre-loaded Books Data

The application comes with 5 books pre-loaded:

| ID | Title | Author | ISBN |
|----|-------|--------|------|
| 1 | To Kill a Mockingbird | Harper Lee | 978-0-7432-7356-5 |
| 2 | 1984 | George Orwell | 978-0-452-28423-4 |
| 3 | The Great Gatsby | F. Scott Fitzgerald | 978-0-7432-4722-4 |
| 4 | The Catcher in the Rye | J.D. Salinger | 978-0-06-112008-4 |
| 5 | Pride and Prejudice | Jane Austen | 978-0-14-028329-7 |

## Testing Checklist

### Part A Tasks:
- [ ] Repository forked successfully
- [ ] Repository cloned to Theia environment
- [ ] Project structure verified

### Part B Tasks:
- [ ] All npm packages installed successfully
- [ ] Postman account created/logged in with Google
- [ ] Postman collection imported
- [ ] Environment variables configured

### Part C Tasks:
- [ ] JWT authentication implemented
- [ ] Session authentication implemented
- [ ] Access restrictions working correctly

### Part D Tasks:
- [ ] General user can access all book endpoints
- [ ] User registration working
- [ ] Registered users can manage reviews
- [ ] Users can only modify their own reviews

### Part E Tasks:
- [ ] Get all books uses async/await
- [ ] Search by ISBN uses Promises
- [ ] Search by author uses Promises  
- [ ] Search by title uses Promises
- [ ] All endpoints tested in Postman
- [ ] Concurrent access verified

## Submission Requirements

1. **Code Implementation**: Complete server.js with all required functionality
2. **Testing**: All Postman tests passing
3. **Documentation**: Updated README with your specific implementation details
4. **Git History**: Clean commit history showing progression through parts A-E

## Success Criteria

- All API endpoints working correctly
- Authentication and authorization implemented
- Async/await and Promises used as specified
- Multiple users can access simultaneously
- Comprehensive testing completed with Postman
- Code follows best practices and is well-documented