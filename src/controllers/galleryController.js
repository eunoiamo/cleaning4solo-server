const GalleryModel = require('../models/galleryModel');

const getAllGallery = async (req, res) => {
  try {
    const galleries = await GalleryModel.find();
    res.status(200).send({ message: 'Success', galleries });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

const addGallery = async (req, res) => {
  try {
    const data = await GalleryModel.create(req.body);
    res.status(201).send({
      message: 'Added photo successfully',
      data,
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

const getGalleryByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const galleries = await GalleryModel.find({ category });
    res.status(200).send({ message: 'Success', galleries });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

const deleteGalleryById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGallery = await GalleryModel.findByIdAndDelete(id);
    if (!deletedGallery) {
      return res.status(404).send({ message: 'Image not found' });
    }
    res.status(200).send({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getAllGallery,
  addGallery,
  getGalleryByCategory,
  deleteGalleryById,
};
