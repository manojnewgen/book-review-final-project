const bcrypt = require('bcryptjs');

// In-memory "database"
const users = [];

class User {
  constructor({ username, email, password }) {
    this.id = Date.now().toString();
    this.username = username;
    this.email = email;
    this.password = password; // Note: This should be the ALREADY HASHED password
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Compare passwords (instance method)
  async comparePassword(candidatePassword) {
    console.log('Comparing:', candidatePassword, 'with stored:', this.password);
    return await bcrypt.compare(candidatePassword, this.password);
  }

  // Save user to in-memory DB
  static async create(userData) {
    // Hash password first
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    console.log('Hashed password:', hashedPassword);
    
    // Create user with the hashed password
    const newUser = new User({
      ...userData,
      password: hashedPassword // Store the hashed version
    });
    
    users.push(newUser);
    return newUser;
  }

  // Find by email (for login)
  static async findByEmail(email) {
    return users.find(user => user.email === email);
  }

  // Remove password when sending user data
  toJSON() {
    const { password, ...userData } = this;
    return userData;
  }
}

module.exports = User;