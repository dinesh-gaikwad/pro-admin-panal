const ApiResponse = require('../utils/ApiResponse');
const employerService = require('../services/employer.service');

const getMyProfile = async (req, res, next) => {
  try {
    const profile = await employerService.getProfile(req.user.id);
    return res.status(200).json(new ApiResponse(200, profile, 'Profile fetched successfully'));
  } catch (error) {
    next(error);
  }
};

const updateMyProfile = async (req, res, next) => {
  try {
    const profile = await employerService.updateProfile(req.user.id, req.body);
    return res.status(200).json(new ApiResponse(200, profile, 'Profile updated successfully'));
  } catch (error) {
    next(error);
  }
};

const getDashboard = async (req, res, next) => {
  try {
    const dashboard = await employerService.getDashboard(req.user.id);
    return res.status(200).json(new ApiResponse(200, dashboard, 'Dashboard loaded successfully'));
  } catch (error) {
    next(error);
  }
};

const getMyJobs = async (req, res, next) => {
  try {
    const jobs = await employerService.getMyJobs(req.user.id, req.query);
    return res.status(200).json(new ApiResponse(200, jobs, 'Jobs fetched successfully'));
  } catch (error) {
    next(error);
  }
};

const getApplicants = async (req, res, next) => {
  try {
    const applications = await employerService.getJobApplicants(req.user.id);
    return res.status(200).json(new ApiResponse(200, applications, 'Applicants fetched successfully'));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMyProfile,
  updateMyProfile,
  getDashboard,
  getMyJobs,
  getApplicants,
};
