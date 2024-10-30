const { PrismaClient } = require("@prisma/client");
const { booking } = new PrismaClient();

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { movieId, showtimeId, username, email } = req.body;

    const newBooking = await booking.create({
      data: {
        movieId,
        showtimeId,
        username,
        email,
      },
    });

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBooking,
};
