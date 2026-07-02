const ApiResponse = require('../utils/ApiResponse');
const studentService = require('../services/student.service');

const getMyProfile = async (req, res, next) => {
  try {
    const profile = await studentService.getProfile(req.user.id);
    return res.status(200).json(new ApiResponse(200, profile, 'Profile fetched successfully'));
  } catch (error) {
    next(error);
  }
};

const updateMyProfile = async (req, res, next) => {
  try {
    const profile = await studentService.updateProfile(req.user.id, req.body);
    return res.status(200).json(new ApiResponse(200, profile, 'Profile updated successfully'));
  } catch (error) {
    next(error);
  }
};

const getDashboard = async (req, res, next) => {
  try {
    const dashboard = await studentService.getDashboard(req.user.id);
    return res.status(200).json(new ApiResponse(200, dashboard, 'Dashboard loaded successfully'));
  } catch (error) {
    next(error);
  }
};

const getRecommendedJobs = async (req, res, next) => {
  try {
    const jobs = await studentService.searchRecommendations(req.query);
    return res.status(200).json(new ApiResponse(200, jobs, 'Recommended jobs fetched successfully'));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMyProfile,
  updateMyProfile,
  getDashboard,
  getRecommendedJobs,
};
