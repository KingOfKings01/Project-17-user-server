const { PrismaClient } = require('@prisma/client');
const {showtime} = new PrismaClient();

// Get showtimes by movie ID
const getShowtimesByMovieId = async (req, res) => {
  try {
    const { movieId } = req.params;
    const showtimes = await showtime.findMany({
      where: { movieId: parseInt(movieId) },
    });

    if (!showtimes.length) {
      return res.status(404).json({ message: 'No show times found for this movie' });
    }

    res.status(200).json(showtimes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getShowtimesByMovieId,
};
