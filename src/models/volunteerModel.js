const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const volunteerSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: [true, 'Event ID is required'],
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const Volunteer = model('Volunteer', volunteerSchema);

module.exports = Volunteer;
