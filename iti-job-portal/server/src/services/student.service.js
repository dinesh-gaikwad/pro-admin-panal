const StudentProfile = require('../models/StudentProfile');
const Application = require('../models/Application');
const ApiError = require('../utils/ApiError');

const getProfile = async (userId) => {
  const profile = await StudentProfile.findOne({ userId }).populate('userId', 'name email role');
  if (!profile) throw new ApiError(404, 'Student profile not found');
  return profile;
};

const updateProfile = async (userId, data) => {
  const profile = await StudentProfile.findOneAndUpdate(
    { userId },
    data,
    { new: true, runValidators: true }
  );

  if (!profile) throw new ApiError(404, 'Student profile not found');
  return profile;
};

const getDashboard = async (studentId) => {
  const profile = await StudentProfile.findById(studentId).populate('userId', 'name email role');
  if (!profile) throw new ApiError(404, 'Student profile not found');

  const applications = await Application.find({ studentId })
    .sort({ createdAt: -1 })
    .populate('jobId', 'title tradeSkill location status')
    .populate('appliedBy', 'name email');

  return {
    profile,
    applications,
    totalApplications: applications.length,
    shortlisted: applications.filter(a => a.status === 'shortlisted').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
    hired: applications.filter(a => a.status === 'hired').length,
  };
};

const searchRecommendations = async (filters = {}) => {
  const Job = require('../models/Job');
  const query = { status: 'active', isApproved: true };

  if (filters.tradeSkill) query.tradeSkill = new RegExp(filters.tradeSkill, 'i');
  if (filters.location) query.location = new RegExp(filters.location, 'i');

  const jobs = await Job.find(query)
    .sort({ createdAt: -1 })
    .limit(Number(filters.limit || 20))
    .populate('employerId', 'workshopName location');

  return jobs;
};

module.exports = {
  getProfile,
  updateProfile,
  getDashboard,
  searchRecommendations,
};
