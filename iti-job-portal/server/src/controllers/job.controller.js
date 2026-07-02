const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const jobService = require('../services/job.service');

const createJob = async (req, res, next) => {
  try {
    const payload = {
      ...req.body,
      postedBy: req.user.id,
      employerId: req.body.employerId,
    };

    const job = await jobService.createJob(payload);

    return res.status(201).json(
      new ApiResponse(201, job, 'Job created successfully')
    );
  } catch (error) {
    next(error);
  }
};

const getAllJobs = async (req, res, next) => {
  try {
    const result = await jobService.getJobs(req.query);

    return res.status(200).json(
      new ApiResponse(200, result, 'Jobs fetched successfully')
    );
  } catch (error) {
    next(error);
  }
};

const getJobById = async (req, res, next) => {
  try {
    const job = await jobService.getJobById(req.params.id);

    return res.status(200).json(
      new ApiResponse(200, job, 'Job fetched successfully')
    );
  } catch (error) {
    next(error);
  }
};

const updateJob = async (req, res, next) => {
  try {
    const job = await jobService.updateJob(req.params.id, req.body);

    return res.status(200).json(
      new ApiResponse(200, job, 'Job updated successfully')
    );
  } catch (error) {
    next(error);
  }
};

const deleteJob = async (req, res, next) => {
  try {
    await jobService.deleteJob(req.params.id);

    return res.status(200).json(
      new ApiResponse(200, null, 'Job deleted successfully')
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};
