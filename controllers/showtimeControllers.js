const { PrismaClient } = require('@prisma/client');
const {showtime} = new PrismaClient();

// Get all showtimes
const getAllShowtimes = async (req, res) => {
  try {
    const showtimes = await showtime.findMany();
    res.status(200).json(showtimes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllShowtimes,
};
