const Volunteer = require('../models/volunteerModel');
const User = require('../models/userModel'); // Model untuk user
const Event = require('../models/eventModel'); // Model untuk event

async function createVolunteer(req, res) {
  try {
    // Pengecekan keberadaan User dan Event
    const userExists = await User.findById(req.body.userId);
    const eventExists = await Event.findById(req.body.eventId);

    if (!userExists || !eventExists) {
      return res.status(404).send({ message: 'User atau Event tidak ditemukan' });
    }

    // Pengecekan apakah user sudah terdaftar sebagai volunteer pada event tersebut
    const existingVolunteer = await Volunteer.findOne({ userId: req.body.userId, eventId: req.body.eventId });
    if (existingVolunteer) {
      return res.status(400).json({ message: 'You have already joined this event.' });
    }

    const newVolunteer = await Volunteer.create(req.body);
    res.status(201).send({ message: 'Volunteer berhasil ditambahkan', data: newVolunteer });
  } catch (error) {
    res.status(400).send({ message: 'Gagal menambahkan volunteer', error: error.message });
  }
}

async function getAllVolunteers(req, res) {
  try {
    const volunteers = await Volunteer.find();
    res.send({ message: 'Data volunteer berhasil diperoleh', data: volunteers });
  } catch (error) {
    res.status(404).send({ message: 'Gagal mendapatkan data volunteer', error: error.message });
  }
}

async function updateVolunteer(req, res) {
  try {
    const volunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!volunteer) {
      return res.status(404).send({ message: 'Volunteer tidak ditemukan' });
    }
    res.send({ message: 'Volunteer berhasil diperbarui', data: volunteer });
  } catch (error) {
    res.status(400).send({ message: 'Gagal memperbarui volunteer', error: error.message });
  }
}

async function removeVolunteer(req, res) {
  try {
    const { userId, eventId } = req.params;

    const result = await Volunteer.findOneAndDelete({ userId, eventId });

    if (!result) {
      return res.status(404).send({ message: 'Volunteer not found' });
    }

    res.send({ message: 'Volunteer entry successfully deleted' });
  } catch (error) {
    console.error('Error:', error); // Debugging: Log any errors
    res.status(400).send({ message: 'Failed to delete volunteer entry', error: error.message });
  }
}

async function getEventsByUser(req, res) {
  try {
    const { userId } = req.params;

    const volunteers = await Volunteer.find({ userId }).populate('eventId');

    const events = volunteers.map((volunteer) => volunteer.eventId);

    if (events.length === 0) {
      return res.status(404).send({ message: 'Tidak ada event yang ditemukan untuk user ini' });
    }

    res.send({ message: 'Event-event yang diikuti oleh user berhasil diperoleh', data: events });
  } catch (error) {
    console.error('Error:', error); // Debugging: Log any errors
    res.status(400).send({ message: 'Gagal mendapatkan data event', error: error.message });
  }
}

module.exports = {
  createVolunteer,
  getAllVolunteers,
  updateVolunteer,
  removeVolunteer,
  getEventsByUser,
};
