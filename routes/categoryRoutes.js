const express = require('express');
const { getAllCategoriesWithMovies } = require('../controllers/categoryControllers');
const router = express.Router();

router.get('/', getAllCategoriesWithMovies);

module.exports = router;