const express = require('express');

const router = express.Router();
const {
  getAllGallery, addGallery, getGalleryByCategory, deleteGalleryById,
} = require('../controllers/galleryController');

router.get('/', getAllGallery);
router.post('/', addGallery);
router.get('/category/:category', getGalleryByCategory);
router.delete('/:id', deleteGalleryById);

module.exports = router;
