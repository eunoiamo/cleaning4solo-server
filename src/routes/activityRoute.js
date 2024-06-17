const express = require('express');

const router = express.Router();
const {
  createActivity, addWasteToActivity, getAllActivities, getWastesByActivityId, updateActivityStatus, fetchActivityDetails,
} = require('../controllers/activityController');
const { authenticateToken } = require('../middleware/authenticateToken');

router.post('/', authenticateToken, createActivity);
router.post('/:activityId/waste', authenticateToken, addWasteToActivity);
router.get('/wastes/byActivity/:activityId', authenticateToken, getWastesByActivityId);
router.patch('/:id/status', updateActivityStatus);
router.get('/:id', fetchActivityDetails);
router.get('/', getAllActivities);

module.exports = router;
