const express = require('express');

const router = express.Router();
const {
  getAllEvents,
  createEvent,
  getSpecifiedEvent,
  updateEventById,
  deleteEvent,
} = require('../controllers/eventController');

router.route('/').get(getAllEvents);
router.route('/').post(createEvent);
router.route('/:id').get(getSpecifiedEvent);
router.route('/:id').put(updateEventById);
router.route('/:id').delete(deleteEvent);

module.exports = router;
