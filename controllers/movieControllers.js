const { PrismaClient } = require('@prisma/client');
const {movie} = new PrismaClient();

// Get movie by ID
const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundMovie = await movie.findUnique({
      where: { id: parseInt(id) },
    });

    if (!foundMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.status(200).json(foundMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMovieById,
};
