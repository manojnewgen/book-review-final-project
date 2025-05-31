const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// @desc    Register user
exports.register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if user exists
  if (await User.findByEmail(email)) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Create user (password auto-hashed in User.create())
  const user = await User.create({ username, email, password });

  // Generate token
  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET, // Now properly loaded from .env
    { expiresIn: process.env.JWT_EXPIRE || "30d" } // Fallback if not set
  );

  res.json({ token, user: user.toJSON() });
});

exports.login = asyncHandler(async (req, res) => {
  // Add input validation
  if (!req.body.email || !req.body.password) {
    console.log("Missing credentials:", req.body);
    return res.status(400).json({
      error: "Email and password are required",
      receivedBody: req.body, // For debugging
    });
  }

  const { email, password } = req.body;
  console.log("Login attempt for:", email);

  const user = await User.findByEmail(email);
  if (!user) {
    console.log("User not found for email:", email);
    return res.status(401).json({ message: "Invalid credentials" });
  }

  console.log("Comparing password with hash:", user.password);
  const isMatch = await user.comparePassword(password);
  console.log("Password match result:", isMatch);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.json({ token });
});
