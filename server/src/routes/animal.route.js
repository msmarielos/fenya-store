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

router.post('/', upload.single('img'), async (req, res) => {
  const { name, title, description, age, type, city, breed } = req.body;
  const { filename } = req.file;
  const { useId } = req;
  try {
    const animal = await Animal.create({
      name,
      title,
      isChecked: false,
      description,
      age,
      type,
      city,
      breed,
      img: filename,
      user_id: useId,
    });
    res.json({ success: true, animal });
  } catch (error) {
    res.status(501).json({ success: false });
  }
});

module.exports = router;
