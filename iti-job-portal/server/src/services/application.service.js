const Application = require('../models/Application');
const Job = require('../models/Job');
const ApiError = require('../utils/ApiError');

const applyForJob = async (payload) => {
  const job = await Job.findById(payload.jobId);
  if (!job) throw new ApiError(404, 'Job not found');

  const existing = await Application.findOne({
    jobId: payload.jobId,
    studentId: payload.studentId,
  });

  if (existing) throw new ApiError(409, 'You have already applied for this job');

  const application = await Application.create(payload);
  return application;
};

const getApplications = async (filters = {}) => {
  const query = {};

  if (filters.jobId) query.jobId = filters.jobId;
  if (filters.studentId) query.studentId = filters.studentId;
  if (filters.status) query.status = filters.status;

  const page = Number(filters.page || 1);
  const limit = Number(filters.limit || 10);
  const skip = (page - 1) * limit;

  const total = await Application.countDocuments(query);
  const applications = await Application.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate('jobId', 'title tradeSkill location status')
    .populate('studentId', 'trade itiInstituteName location')
    .populate('appliedBy', 'name email');

  return {
    applications,
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
  };
};

const updateApplicationStatus = async (id, status, notes = '') => {
  const allowed = ['applied', 'under_review', 'shortlisted', 'rejected', 'hired', 'withdrawn'];
  if (!allowed.includes(status)) throw new ApiError(400, 'Invalid application status');

  const application = await Application.findByIdAndUpdate(
    id,
    { status, employerNotes: notes },
    { new: true, runValidators: true }
  );

  if (!application) throw new ApiError(404, 'Application not found');
  return application;
};

const withdrawApplication = async (id) => {
  const application = await Application.findByIdAndUpdate(
    id,
    { status: 'withdrawn', isWithdrawn: true },
    { new: true, runValidators: true }
  );

  if (!application) throw new ApiError(404, 'Application not found');
  return application;
};

module.exports = {
  applyForJob,
  getApplications,
  updateApplicationStatus,
  withdrawApplication,
};
