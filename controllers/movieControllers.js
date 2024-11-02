const { PrismaClient } = require("@prisma/client");
const { movie } = new PrismaClient();

// Get movie and its showtimes by movie ID
const getMovieAndShowtimesById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundMovie = await movie.findUnique({
      where: { id: parseInt(id) },
      include: {
        showtimes: true, // Include showtimes
      },
    });

    if (!foundMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(foundMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMovieAndShowtimesById,
};
