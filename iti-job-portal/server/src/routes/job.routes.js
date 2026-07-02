const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const jobController = require('../controllers/job.controller');
const { validateJob } = require('../validators/job.validator');

router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);

router.post(
  '/',
  authMiddleware,
  roleMiddleware('employer', 'admin'),
  validateJob,
  jobController.createJob
);

router.put(
  '/:id',
  authMiddleware,
  roleMiddleware('employer', 'admin'),
  validateJob,
  jobController.updateJob
);

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware('admin'),
  jobController.deleteJob
);

module.exports = router;
