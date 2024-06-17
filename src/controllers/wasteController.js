const Waste = require('../models/wasteModel');
const User = require('../models/userModel');

// Create new waste
const createWaste = async (req, res) => {
  try {
    const userExists = await User.findById(req.body.userId);
    if (!userExists) {
      return res.status(404).send({ message: 'User tidak ditemukan' });
    }
    const {
      jenis, berat, asalLimbah, harga, emisiKarbon, userId,
    } = req.body;

    const waste = new Waste({
      jenis,
      berat,
      asalLimbah,
      harga,
      emisiKarbon,
      userId,
    });

    await waste.save();
    res.status(201).send(waste);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all wastes
const getAllWastes = async (req, res) => {
  try {
    const wastes = await Waste.find();
    res.status(200).send(wastes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single waste by ID
const getWasteById = async (req, res) => {
  try {
    const waste = await Waste.findById(req.params.id);

    if (!waste) {
      return res.status(404).send({ message: 'Waste not found' });
    }

    res.status(200).send(waste);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a waste
const updateWaste = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      jenis, berat, asalLimbah, harga, emisiKarbon,
    } = req.body;

    const waste = await Waste.findByIdAndUpdate(
      id,
      {
        jenis, berat, asalLimbah, harga, emisiKarbon,
      },
      { new: true, runValidators: true },
    );

    if (!waste) {
      return res.status(404).send({ message: 'Waste not found' });
    }

    res.status(200).send(waste);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a waste
const deleteWaste = async (req, res) => {
  try {
    const { id } = req.params;

    const waste = await Waste.findByIdAndDelete(id);

    if (!waste) {
      return res.status(404).send({ message: 'Waste not found' });
    }

    res.status(200).send({ message: 'Waste deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createWaste,
  getAllWastes,
  getWasteById,
  updateWaste,
  deleteWaste,
};
