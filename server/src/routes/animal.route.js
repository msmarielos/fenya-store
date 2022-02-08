const router = require('express').Router();
const multer = require('multer');
const { storage } = require('../storage');
const { Animal, User } = require('../db/models');

const upload = multer({ storage });

router.get('/', async (req, res) => {
  const animals = await Animal.findAll({
    include: [User],
  });
  res.json(animals);
});

router.post('/', async (req, res) => {
  const { name, title, description, age, type, city, breed,  } = req.body;
  const { filename } = req.file;
  try {
    const newAnimal = await Animal.create({
      name,
      title,
      isChecked: false,
      description,
      age,
      type,
      city,
      breed,
      user_id: 1,

    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
