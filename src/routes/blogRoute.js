const express = require('express');

const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getSpecifiedBlog,
  updateBlogById,
  deleteBlogById,
} = require('../controllers/blogController');
const { authenticateToken } = require('../middleware/authenticateToken');

router.get('/', getAllBlogs);
router.post('/', authenticateToken, createBlog);
router.get('/:id', getSpecifiedBlog);
router.put('/:id', authenticateToken, updateBlogById);
router.delete('/:id', authenticateToken, deleteBlogById);

module.exports = router;
