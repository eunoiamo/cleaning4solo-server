const express = require('express');

const router = express();

const eventRoute = require('./eventRoute');
const blogRoute = require('./blogRoute');
const userRoute = require('./userRoute');
const wasteRoute = require('./wasteRoute');
const activityRoute = require('./activityRoute');
const volunteerRoute = require('./volunteerRoute');
const galleryRoute = require('./galleryRoute');
const wasteValueRoute = require('./wasteValueRoute');

router.use('/events', eventRoute);
router.use('/blogs', blogRoute);
router.use('/users', userRoute);
router.use('/wastes', wasteRoute);
router.use('/volunteer', volunteerRoute);
router.use('/galleries', galleryRoute);
router.use('/activities', activityRoute);
router.use('/value', wasteValueRoute);

module.exports = router;
