const express = require('express');

const router = express.Router();
const {
  getAllWasteValues,
  getWasteValueById,
  createWasteValue,
  updateWasteValue,
  deleteWasteValue,
} = require('../controllers/wasteValueController');

router.get('/', getAllWasteValues);
router.get('/:id', getWasteValueById);
router.post('/', createWasteValue);
router.put('/:id', updateWasteValue);
router.delete('/:id', deleteWasteValue);

module.exports = router;
