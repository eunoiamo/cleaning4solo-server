const mongoose = require('mongoose');

const wasteValueSchema = new mongoose.Schema(
  {
    jenisSampah: {
      type: String,
      required: true,
    },
    harga: {
      type: String,
      required: true,
    },
    emisi: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const WasteValueModel = mongoose.model('WasteValue', wasteValueSchema);
module.exports = WasteValueModel;
