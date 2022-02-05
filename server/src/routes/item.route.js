const router = require('express').Router();
const multer = require('multer');
const { Item, CategoryType } = require('../db/models');
const { storage } = require('../storage');
const upload = multer({ storage });

router.get('/food/all', (req, res) => {
  Item.findAll().then(items => res.json(items));
});

router.get('/cats/food', (req, res) => {
  Item.findAll({ where: { categoryType_id: 1 } }).then(items =>
    res.json(items)
  );
});

router.get('/dogs/food', (req, res) => {
  Item.findAll({ where: { categoryType_id: 4 } }).then(items =>
    res.json(items)
  );
});

router.get('/:itemId', (req, res) => {
  const id = req.params.itemId;
  Item.findOne({ where: { id } }).then(item => res.json(item));
});

router.get('/', async (req, res) => {
  Item.findAll()
    .then(allItems => res.json(allItems))
    .catch(error => console.log(error));
});

router.post('/', upload.single('img'), async (req, res) => {
  const { title, description, price, type, category, amount } = req.body;
  const { filename } = req.file;

  const categoryType_id = await CategoryType.findOne({
    where: {
      type_id: type,
      category_id: category,
    },
  });

  try {
    await Item.create({
      title,
      description,
      price,
      categoryType_id: categoryType_id.id,
      rating: 0,
      img: `storage/${filename}`,
      amount,
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
