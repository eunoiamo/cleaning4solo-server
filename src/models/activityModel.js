const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ActivitySchema = new Schema({
  aktivitas: { type: String, required: true },
  totalJual: { type: Number, required: true, default: 0 },
  totalEmisiKarbon: { type: Number, required: true, default: 0 },
  statusAktivitas: { type: String, required: true, default: 'draft' },
  wasteIds: [{ type: Schema.Types.ObjectId, ref: 'Waste', required: true }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
}, {
  timestamps: true,
});

const ActivityModel = model('Activity', ActivitySchema);
module.exports = ActivityModel;
