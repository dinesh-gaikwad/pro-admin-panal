const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const studentController = require('../controllers/student.controller');

router.get('/profile', authMiddleware, roleMiddleware('student', 'admin'), studentController.getMyProfile);
router.put('/profile', authMiddleware, roleMiddleware('student', 'admin'), studentController.updateMyProfile);
router.get('/dashboard', authMiddleware, roleMiddleware('student', 'admin'), studentController.getDashboard);
router.get('/jobs/recommended', authMiddleware, roleMiddleware('student', 'admin'), studentController.getRecommendedJobs);

module.exports = router;
