const User = require('../models/User');
const Job = require('../models/Job');
const EmployerProfile = require('../models/EmployerProfile');
const StudentProfile = require('../models/StudentProfile');
const Application = require('../models/Application');
const ApiError = require('../utils/ApiError');

const getDashboard = async () => {
  const [users, jobs, employers, students, applications] = await Promise.all([
    User.countDocuments(),
    Job.countDocuments(),
    EmployerProfile.countDocuments(),
    StudentProfile.countDocuments(),
    Application.countDocuments(),
  ]);

  const pendingJobs = await Job.countDocuments({ isApproved: false });
  const activeJobs = await Job.countDocuments({ status: 'active' });
  const pendingEmployers = await EmployerProfile.countDocuments({ verificationStatus: 'pending' });

  return {
    users,
    jobs,
    employers,
    students,
    applications,
    pendingJobs,
    activeJobs,
    pendingEmployers,
  };
};

const getAllUsers = async () => {
  return User.find().sort({ createdAt: -1 });
};

const updateUserRole = async (id, role) => {
  const allowed = ['student', 'employer', 'admin'];
  if (!allowed.includes(role)) throw new ApiError(400, 'Invalid role');

  const user = await User.findByIdAndUpdate(id, { role }, { new: true, runValidators: true });
  if (!user) throw new ApiError(404, 'User not found');
  return user;
};

const toggleUserStatus = async (id, isActive) => {
  const user = await User.findByIdAndUpdate(id, { isActive }, { new: true });
  if (!user) throw new ApiError(404, 'User not found');
  return user;
};

const getPendingJobs = async () => {
  return Job.find({ isApproved: false }).sort({ createdAt: -1 }).populate('postedBy', 'name email role');
};

const approveJob = async (id) => {
  const job = await Job.findByIdAndUpdate(id, { isApproved: true, status: 'active' }, { new: true });
  if (!job) throw new ApiError(404, 'Job not found');
  return job;
};

const rejectJob = async (id) => {
  const job = await Job.findByIdAndUpdate(id, { status: 'closed', isApproved: false }, { new: true });
  if (!job) throw new ApiError(404, 'Job not found');
  return job;
};

const getPendingEmployers = async () => {
  return EmployerProfile.find({ verificationStatus: 'pending' })
    .sort({ createdAt: -1 })
    .populate('userId', 'name email role');
};

const approveEmployer = async (id) => {
  const employer = await EmployerProfile.findByIdAndUpdate(
    id,
    { verificationStatus: 'approved', approved: true },
    { new: true }
  );
  if (!employer) throw new ApiError(404, 'Employer profile not found');
  return employer;
};

const rejectEmployer = async (id) => {
  const employer = await EmployerProfile.findByIdAndUpdate(
    id,
    { verificationStatus: 'rejected', approved: false },
    { new: true }
  );
  if (!employer) throw new ApiError(404, 'Employer profile not found');
  return employer;
};

const getAllApplications = async () => {
  return Application.find()
    .sort({ createdAt: -1 })
    .populate('jobId', 'title tradeSkill location status')
    .populate('studentId', 'trade itiInstituteName location')
    .populate('appliedBy', 'name email');
};

module.exports = {
  getDashboard,
  getAllUsers,
  updateUserRole,
  toggleUserStatus,
  getPendingJobs,
  approveJob,
  rejectJob,
  getPendingEmployers,
  approveEmployer,
  rejectEmployer,
  getAllApplications,
};
