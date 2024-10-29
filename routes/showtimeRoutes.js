const express = require('express');
const { getAllShowtimes } = require('../controllers/showtimeControllers');
const router = express.Router();

router.get('/', getAllShowtimes);

module.exports = router;
