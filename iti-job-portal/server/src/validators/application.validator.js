const validateApplication = (req, res, next) => {
  const { jobId, studentId } = req.body;
  const errors = [];

  if (!jobId) errors.push('jobId is required');
  if (!studentId) errors.push('studentId is required');

  if (errors.length) {
    return res.status(400).json({ success: false, message: errors[0], errors });
  }

  next();
};

module.exports = { validateApplication };
