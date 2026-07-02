const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const employerController = require('../controllers/employer.controller');

router.get('/profile', authMiddleware, roleMiddleware('employer', 'admin'), employerController.getMyProfile);
router.put('/profile', authMiddleware, roleMiddleware('employer', 'admin'), employerController.updateMyProfile);
router.get('/dashboard', authMiddleware, roleMiddleware('employer', 'admin'), employerController.getDashboard);
router.get('/jobs', authMiddleware, roleMiddleware('employer', 'admin'), employerController.getMyJobs);
router.get('/applicants', authMiddleware, roleMiddleware('employer', 'admin'), employerController.getApplicants);

module.exports = router;
