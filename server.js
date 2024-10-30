const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const prisma = new PrismaClient();

const categoryRoutes = require("./routes/categoryRoutes");
const movieRoutes = require("./routes/movieRoutes");
const bookedRoutes = require("./routes/bookedRoutes");

const app = express();

app.use(express.json());
app.use(cors())

// Routes
app.use("/categories", categoryRoutes);
app.use("/movies", movieRoutes);
app.use("/booking", bookedRoutes);

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the User Server" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});