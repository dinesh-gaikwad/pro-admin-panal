const ApiResponse = require('../utils/ApiResponse');
const applicationService = require('../services/application.service');

const applyForJob = async (req, res, next) => {
  try {
    const payload = {
      ...req.body,
      appliedBy: req.user.id,
    };

    const application = await applicationService.applyForJob(payload);

    return res.status(201).json(
      new ApiResponse(201, application, 'Application submitted successfully')
    );
  } catch (error) {
    next(error);
  }
};

const getApplications = async (req, res, next) => {
  try {
    const result = await applicationService.getApplications(req.query);

    return res.status(200).json(
      new ApiResponse(200, result, 'Applications fetched successfully')
    );
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { status, notes } = req.body;
    const application = await applicationService.updateApplicationStatus(
      req.params.id,
      status,
      notes
    );

    return res.status(200).json(
      new ApiResponse(200, application, 'Application status updated successfully')
    );
  } catch (error) {
    next(error);
  }
};

const withdraw = async (req, res, next) => {
  try {
    const application = await applicationService.withdrawApplication(req.params.id);

    return res.status(200).json(
      new ApiResponse(200, application, 'Application withdrawn successfully')
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  applyForJob,
  getApplications,
  updateStatus,
  withdraw,
};
