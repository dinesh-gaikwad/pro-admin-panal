const Job = require('../models/Job');
const ApiError = require('../utils/ApiError');

const createJob = async (payload) => {
  const job = await Job.create(payload);
  return job;
};

const getJobs = async (filters = {}) => {
  const query = {};

  if (filters.tradeSkill) query.tradeSkill = new RegExp(filters.tradeSkill, 'i');
  if (filters.location) query.location = new RegExp(filters.location, 'i');
  if (filters.status) query.status = filters.status;
  if (filters.jobType) query.jobType = filters.jobType;
  if (filters.isApproved !== undefined) query.isApproved = filters.isApproved === 'true';

  const page = Number(filters.page || 1);
  const limit = Number(filters.limit || 10);
  const skip = (page - 1) * limit;

  const total = await Job.countDocuments(query);
  const jobs = await Job.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate('employerId', 'workshopName location');

  return {
    jobs,
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
  };
};

const getJobById = async (id) => {
  const job = await Job.findById(id).populate('employerId', 'workshopName location');
  if (!job) throw new ApiError(404, 'Job not found');
  return job;
};

const updateJob = async (id, data) => {
  const job = await Job.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!job) throw new ApiError(404, 'Job not found');
  return job;
};

const deleteJob = async (id) => {
  const job = await Job.findByIdAndDelete(id);
  if (!job) throw new ApiError(404, 'Job not found');
  return job;
};

module.exports = {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
};
