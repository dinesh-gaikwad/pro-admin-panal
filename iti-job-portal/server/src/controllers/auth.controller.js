const User = require('../models/User');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const authService = require('../services/auth.service');
const StudentProfile = require('../models/StudentProfile');
const EmployerProfile = require('../models/EmployerProfile');

const register = async (req, res, next) => {
  try {
    const { user, token } = await authService.registerUser(req.body);

    if (user.role === 'student') {
      await StudentProfile.create({
        userId: user._id,
        trade: req.body.trade || 'ITI',
        itiInstituteName: req.body.itiInstituteName || '',
        location: req.body.location || '',
        contactNumber: req.body.contactNumber || '',
      });
    }

    if (user.role === 'employer') {
      await EmployerProfile.create({
        userId: user._id,
        workshopName: req.body.workshopName || '',
        location: req.body.location || '',
        contactNumber: req.body.contactNumber || '',
      });
    }

    return res.status(201).json(
      new ApiResponse(201, { user, token }, 'User registered successfully')
    );
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { user, token } = await authService.loginUser(req.body);

    return res.status(200).json(
      new ApiResponse(200, { user, token }, 'Login successful')
    );
  } catch (error) {
    next(error);
  }
};

const me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) throw new ApiError(404, 'User not found');

    return res.status(200).json(
      new ApiResponse(200, user, 'Profile fetched successfully')
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, me };
