const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const adminController = require('../controllers/admin.controller');

router.use(authMiddleware);
router.use(roleMiddleware('admin'));

router.get('/dashboard', adminController.dashboard);
router.get('/users', adminController.users);
router.patch('/users/:id/role', adminController.setRole);
router.patch('/users/:id/status', adminController.setStatus);

router.get('/jobs/pending', adminController.pendingJobs);
router.patch('/jobs/:id/approve', adminController.approveJob);
router.patch('/jobs/:id/reject', adminController.rejectJob);

router.get('/employers/pending', adminController.pendingEmployers);
router.patch('/employers/:id/approve', adminController.approveEmployer);
router.patch('/employers/:id/reject', adminController.rejectEmployer);

router.get('/applications', adminController.applications);

module.exports = router;
