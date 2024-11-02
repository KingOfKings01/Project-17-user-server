const { PrismaClient } = require('@prisma/client');
const {category} = new PrismaClient();

// Get all categories with their movies
const getAllCategoriesWithMovies = async (req, res) => {
  try {
    const categories = await category.findMany({
      include: {
        movies: true,
      },
    });

    res.status(200).json(categories);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCategoriesWithMovies,
};

