const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const applicationController = require('../controllers/application.controller');
const { validateApplication } = require('../validators/application.validator');

router.post(
  '/',
  authMiddleware,
  roleMiddleware('student', 'admin'),
  validateApplication,
  applicationController.applyForJob
);

router.get(
  '/',
  authMiddleware,
  roleMiddleware('employer', 'admin'),
  applicationController.getApplications
);

router.patch(
  '/:id/status',
  authMiddleware,
  roleMiddleware('employer', 'admin'),
  applicationController.updateStatus
);

router.patch(
  '/:id/withdraw',
  authMiddleware,
  roleMiddleware('student', 'admin'),
  applicationController.withdraw
);

module.exports = router;
