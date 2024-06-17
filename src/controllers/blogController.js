const BlogModel = require('../models/blogModel');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).send({ message: 'Success', blogs });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const data = await BlogModel.create(req.body);
    res.status(201).send({
      message: 'Blog has been created successfully',
      data,
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

const getSpecifiedBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await BlogModel.findById(id);
    if (!data) {
      return res.status(404).send({ message: 'Blog not found' });
    }
    res.status(200).send({ message: 'Success', data });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedBlog = await BlogModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    if (!updatedBlog) {
      return res.status(404).send({ message: 'Blog not found' });
    }
    res.status(200).send({ message: 'Blog updated successfully', data: { id: updatedBlog._id } });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await BlogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).send({ message: 'Blog not found' });
    }
    res.status(200).send({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getSpecifiedBlog,
  updateBlogById,
  deleteBlogById,
};
