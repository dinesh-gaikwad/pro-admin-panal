const ApiResponse = require('../utils/ApiResponse');
const adminService = require('../services/admin.service');

const dashboard = async (req, res, next) => {
  try {
    const data = await adminService.getDashboard();
    return res.status(200).json(new ApiResponse(200, data, 'Dashboard loaded successfully'));
  } catch (error) {
    next(error);
  }
};

const users = async (req, res, next) => {
  try {
    const data = await adminService.getAllUsers();
    return res.status(200).json(new ApiResponse(200, data, 'Users fetched successfully'));
  } catch (error) {
    next(error);
  }
};

const setRole = async (req, res, next) => {
  try {
    const data = await adminService.updateUserRole(req.params.id, req.body.role);
    return res.status(200).json(new ApiResponse(200, data, 'User role updated successfully'));
  } catch (error) {
    next(error);
  }
};

const setStatus = async (req, res, next) => {
  try {
    const data = await adminService.toggleUserStatus(req.params.id, req.body.isActive);
    return res.status(200).json(new ApiResponse(200, data, 'User status updated successfully'));
  } catch (error) {
    next(error);
  }
};

const pendingJobs = async (req, res, next) => {
  try {
    const data = await adminService.getPendingJobs();
    return res.status(200).json(new ApiResponse(200, data, 'Pending jobs fetched successfully'));
  } catch (error) {
    next(error);
  }
};

const approveJob = async (req, res, next) => {
  try {
    const data = await adminService.approveJob(req.params.id);
    return res.status(200).json(new ApiResponse(200, data, 'Job approved successfully'));
  } catch (error) {
    next(error);
  }
};

const rejectJob = async (req, res, next) => {
  try {
    const data = await adminService.rejectJob(req.params.id);
    return res.status(200).json(new ApiResponse(200, data, 'Job rejected successfully'));
  } catch (error) {
    next(error);
  }
};

const pendingEmployers = async (req, res, next) => {
  try {
    const data = await adminService.getPendingEmployers();
    return res.status(200).json(new ApiResponse(200, data, 'Pending employers fetched successfully'));
  } catch (error) {
    next(error);
  }
};

const approveEmployer = async (req, res, next) => {
  try {
    const data = await adminService.approveEmployer(req.params.id);
    return res.status(200).json(new ApiResponse(200, data, 'Employer approved successfully'));
  } catch (error) {
    next(error);
  }
};

const rejectEmployer = async (req, res, next) => {
  try {
    const data = await adminService.rejectEmployer(req.params.id);
    return res.status(200).json(new ApiResponse(200, data, 'Employer rejected successfully'));
  } catch (error) {
    next(error);
  }
};

const applications = async (req, res, next) => {
  try {
    const data = await adminService.getAllApplications();
    return res.status(200).json(new ApiResponse(200, data, 'Applications fetched successfully'));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  dashboard,
  users,
  setRole,
  setStatus,
  pendingJobs,
  approveJob,
  rejectJob,
  pendingEmployers,
  approveEmployer,
  rejectEmployer,
  applications,
};
