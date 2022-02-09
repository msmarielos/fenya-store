const router = require('express').Router();
const multer = require('multer');
const { storage } = require('../storage');
const { Animal, User } = require('../db/models');
const { isAuth } = require('../middlewares/isAuth');

const upload = multer({ storage });

router.get('/', async (req, res) => {
  const animals = await Animal.findAll({
    include: [User],
  });
  res.json(animals);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const animal = await Animal.findOne({
    include: [User],
    where: { id },
  });
  res.json(animal);
});

router.post('/', [upload.single('img'), isAuth], async (req, res) => {
  const { name, title, description, age, type, city, breed } = req.body;
  const { filename } = req.file;
  const { userId } = req;
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
      user_id: userId,
    });
    res.json({ success: true, animal });
  } catch (error) {
    res.status(501).json({ success: false });
  }
});

module.exports = router;
