const express = require('express');
const { getMovieAndShowtimesById } = require('../controllers/movieControllers');
const router = express.Router();

router.get('/:id', getMovieAndShowtimesById);

module.exports = router;