const express = require('express');
const { getShowtimesByMovieId } = require('../controllers/movieControllers');
const router = express.Router();

router.get('/:id', getShowtimesByMovieId);

module.exports = router;