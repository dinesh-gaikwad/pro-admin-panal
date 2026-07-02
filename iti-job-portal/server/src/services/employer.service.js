const EmployerProfile = require('../models/EmployerProfile');
const Job = require('../models/Job');
const Application = require('../models/Application');
const ApiError = require('../utils/ApiError');

const getProfile = async (userId) => {
  const profile = await EmployerProfile.findOne({ userId }).populate('userId', 'name email role');
  if (!profile) throw new ApiError(404, 'Employer profile not found');
  return profile;
};

const updateProfile = async (userId, data) => {
  const profile = await EmployerProfile.findOneAndUpdate(
    { userId },
    data,
    { new: true, runValidators: true }
  );

  if (!profile) throw new ApiError(404, 'Employer profile not found');
  return profile;
};

const getDashboard = async (userId) => {
  const profile = await EmployerProfile.findOne({ userId });
  if (!profile) throw new ApiError(404, 'Employer profile not found');

  const jobs = await Job.find({ postedBy: userId }).sort({ createdAt: -1 });
  const jobIds = jobs.map(job => job._id);

  const applications = await Application.find({ jobId: { $in: jobIds } })
    .sort({ createdAt: -1 })
    .populate('jobId', 'title tradeSkill location status')
    .populate('studentId', 'trade itiInstituteName location')
    .populate('appliedBy', 'name email');

  return {
    profile,
    jobs,
    applications,
    totalJobs: jobs.length,
    totalApplications: applications.length,
    shortlisted: applications.filter(a => a.status === 'shortlisted').length,
    hired: applications.filter(a => a.status === 'hired').length,
  };
};

const getMyJobs = async (userId, filters = {}) => {
  const query = { postedBy: userId };
  if (filters.status) query.status = filters.status;
  if (filters.tradeSkill) query.tradeSkill = new RegExp(filters.tradeSkill, 'i');

  const jobs = await Job.find(query).sort({ createdAt: -1 });
  return jobs;
};

const getJobApplicants = async (userId) => {
  const jobs = await Job.find({ postedBy: userId });
  const jobIds = jobs.map(job => job._id);

  const applications = await Application.find({ jobId: { $in: jobIds } })
    .sort({ createdAt: -1 })
    .populate('jobId', 'title tradeSkill location')
    .populate('studentId', 'trade itiInstituteName location')
    .populate('appliedBy', 'name email');

  return applications;
};

module.exports = {
  getProfile,
  updateProfile,
  getDashboard,
  getMyJobs,
  getJobApplicants,
};
