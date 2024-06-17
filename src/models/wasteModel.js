const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const wasteSchema = new Schema({
  jenis: { type: String, required: true },
  berat: { type: Number, required: true },
  asalLimbah: { type: String, required: true },
  harga: { type: Number, required: true },
  emisiKarbon: { type: Number, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
}, {
  timestamps: true,
});

const Waste = model('Waste', wasteSchema);

module.exports = Waste;
