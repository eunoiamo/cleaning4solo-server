const EventModel = require('../models/eventModel');

const getAllEvents = async (req, res) => {
  try {
    const events = await EventModel.find();
    res.status(200).send({ message: 'success', events });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const data = await EventModel.create(req.body);
    res.status(201).send(
      {
        message: 'Event has ben created successfully',
        data,
      },
    );
  } catch (error) {
    res.status(500).send({ message: error });
    console.error('Error creating event:', error);
  }
};

const getSpecifiedEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await EventModel.findById(id);
    if (!data) {
      return res.status(404).send({ message: 'Event not found' });
    }
    res.status(201).send({ message: 'success', data });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
};

const updateEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedEvent = await EventModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    if (!updatedEvent) {
      return res.status(404).send({ message: 'Event not found' });
    }
    const data = {
      id: updatedEvent._id,
    };
    res.status(201).send({ message: 'Event updated successfully', data });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
    console.error('Error updating event:', error);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEvent = await EventModel.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).send({ message: 'Event not found' });
    }
    res.status(200).send({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  getSpecifiedEvent,
  updateEventById,
  deleteEvent,
};
