const express = require('express');
const { createBooking, confirmBooking } = require('../controllers/bookedControllers');
const router = express.Router();

router.post('/', createBooking);

router.get('/confirm-booking/:token', confirmBooking);

module.exports = router;