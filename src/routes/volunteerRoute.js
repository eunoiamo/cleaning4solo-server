const express = require('express');

const router = express.Router();
const {
  createVolunteer,
  getAllVolunteers,
  updateVolunteer,
  removeVolunteer,
  getEventsByUser,
} = require('../controllers/volunteerController');
const { authenticateToken } = require('../middleware/authenticateToken');

router.post('/join', authenticateToken, createVolunteer);
router.get('/', authenticateToken, getAllVolunteers);
router.get('/users/:userId', authenticateToken, getEventsByUser);
router.put('/:id', authenticateToken, updateVolunteer);
router.delete('/:userId/:eventId', authenticateToken, removeVolunteer);

module.exports = router;
