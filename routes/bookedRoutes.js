const express = require('express');
const { createBooking } = require('../controllers/bookedControllers');
const router = express.Router();

router.post('/', createBooking);

module.exports = router;