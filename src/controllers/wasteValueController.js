const WasteValueModel = require('../models/wasteValueModel');

const getAllWasteValues = async (req, res) => {
  try {
    const wasteValues = await WasteValueModel.find();
    res.status(200).json({ message: 'success', wasteValues });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWasteValueById = async (req, res) => {
  try {
    const wasteValue = await WasteValueModel.findById(req.params.id);
    if (!wasteValue) return res.status(404).json({ message: 'Waste value not found' });
    res.status(200).json(wasteValue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createWasteValue = async (req, res) => {
  try {
    const newWasteValue = new WasteValueModel(req.body);
    await newWasteValue.save();
    res.status(201).json(newWasteValue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateWasteValue = async (req, res) => {
  try {
    const updatedWasteValue = await WasteValueModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedWasteValue) return res.status(404).json({ message: 'Waste value not found' });
    res.status(200).json(updatedWasteValue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteWasteValue = async (req, res) => {
  try {
    const deletedWasteValue = await WasteValueModel.findByIdAndDelete(req.params.id);
    if (!deletedWasteValue) return res.status(404).json({ message: 'Waste value not found' });
    res.status(200).json({ message: 'Waste value deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllWasteValues,
  getWasteValueById,
  createWasteValue,
  updateWasteValue,
  deleteWasteValue,
};
