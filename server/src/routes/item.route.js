const router = require('express').Router();
const multer = require('multer');
const { Item, CategoryType } = require('../db/models');
const { storage } = require('../storage');

const upload = multer({ storage });

router.get('/food/all', (req, res) => {
  Item.findAll({ where: { categoryType_id: [1, 4] } }).then(items =>
    res.json(items)
  );
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

router.get('/dogs/toys', (req, res) => {
  Item.findAll({ where: { categoryType_id: 5 } }).then(items =>
    res.json(items)
  );
});

router.get('/cats/toys', (req, res) => {
  Item.findAll({ where: { categoryType_id: 2 } }).then(items =>
    res.json(items)
  );
});

router.get('/toys/all', (req, res) => {
  Item.findAll({ where: { categoryType_id: [5, 2] } }).then(items =>
    res.json(items)
  );
});

router.get('/dogs/clothes', (req, res) => {
  Item.findAll({ where: { categoryType_id: 3 } }).then(items =>
    res.json(items)
  );
});

router.get('/cats/clothes', (req, res) => {
  Item.findAll({ where: { categoryType_id: 6 } }).then(items =>
    res.json(items)
  );
});

router.get('/clothes/all', (req, res) => {
  Item.findAll({ where: { categoryType_id: [3, 6] } }).then(items =>
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

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Item.destroy({ where: { id } })
    .then(data => (data ? res.json(id) : res.status(404).json(data)))
    .catch(error => res.status(500).json(error));
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

router.put('/:id', (req, res) => {
  const itemId = req.params.id;
  const { title, description, price, amount } = req.body;

  Item.update(
    {
      title,
      description,
      price,
      amount,
    },
    { where: { itemId }, returning: true }
  )
    .then(updatedItem => res.json(updatedItem))
    .catch(error => res.status(500).json(error));
});

module.exports = router;
