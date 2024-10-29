const express = require('express');
const { getMovieById } = require('../controllers/movieControllers');
const router = express.Router();

router.get('/:id', getMovieById);

module.exports = router;