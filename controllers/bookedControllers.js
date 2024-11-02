const { PrismaClient } = require("@prisma/client");
const { booked } = new PrismaClient();
const jwt = require("jsonwebtoken");
const EmailService = require("../services/emailService"); // Ensure the path is correct

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { movieId, showtimeId, username, phoneNumber, email } = req.body;
    const newBooking = await booked.create({
      data: {
        movieId,
        showtimeId,
        username,
        phoneNumber,
        email,
      },
    });

    // Generate JWT token
    const token = jwt.sign(
      { bookingId: newBooking.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send confirmation email with link
    const link = `${process.env.USER_CLIENT_URL}/confirm-booking/${token}`;
    const subject = "Booking Confirmation";
    const html = `<p>Dear ${username},</p>
                  <p>Thank you for your booking. Please confirm your booking by clicking the link below:</p>
                  <a href="${link}">Confirm Booking</a>
                  <p>We look forward to seeing you!</p>`;
    await EmailService.sendEmail(email, subject, html);

    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const confirmBooking = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const bookingId = decoded.bookingId;

    // Check if booking exists
    const foundBooking = await booked.findUnique({ where: { id: bookingId } });
    if (!foundBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if booking is already confirmed
    if (foundBooking.isValid) {
      return res.status(400).json({ error: 'Booking is already confirmed.' });
    }

    const updatedBooking = await booked.update({
      where: { id: bookingId },
      data: { isValid: true },
    });

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error("Error confirming booking:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBooking,
  confirmBooking,
};
