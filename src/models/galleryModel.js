const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const GalleryModel = mongoose.model('Gallery', GallerySchema);
module.exports = GalleryModel;
