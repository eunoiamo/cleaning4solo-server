const express = require('express');

const router = express.Router();
const {
  createWaste,
  getAllWastes,
  getWasteById,
  updateWaste,
  deleteWaste,
} = require('../controllers/wasteController');
const { authenticateToken } = require('../middleware/authenticateToken');

router.post('/', authenticateToken, createWaste);
router.get('/', authenticateToken, getAllWastes);
router.get('/:id', authenticateToken, getWasteById);
router.put('/:id', updateWaste);
router.delete('/:id', deleteWaste);

module.exports = router;
