const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const env = require('../config/env');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role, email: user.email, name: user.name },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );
};

const registerUser = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new ApiError(409, 'User already exists');

  const user = await User.create({
    name,
    email,
    password,
    role: role || 'student',
  });

  const token = generateToken(user);

  return { user, token };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new ApiError(401, 'Invalid credentials');

  const isMatch = await user.matchPassword(password);
  if (!isMatch) throw new ApiError(401, 'Invalid credentials');

  user.lastLoginAt = new Date();
  await user.save({ validateBeforeSave: false });

  const token = generateToken(user);

  return { user, token };
};

module.exports = { registerUser, loginUser, generateToken };
