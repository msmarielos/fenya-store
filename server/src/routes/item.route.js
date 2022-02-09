/* eslint-disable camelcase */
const router = require('express').Router();
const Sequelize = require('sequelize');
const multer = require('multer');
const { Item, CategoryType } = require('../db/models');
const { storage } = require('../storage');

const upload = multer({ storage });

router.get('/food/all', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: [1, 4] } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/cats/food', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: 1 } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/dogs/food', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: 4 } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/dogs/toys', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: 5 } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/cats/toys', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: 2 } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/toys/all', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: [5, 2] } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/dogs/clothes', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: 3 } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/cats/clothes', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: 6 } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/clothes/all', (req, res) => {
  try {
    Item.findAll({ where: { categoryType_id: [3, 6] } }).then(items =>
      res.json(items)
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/:itemId', (req, res) => {
  try {
    const id = req.params.itemId;
    Item.findOne({ where: { id } }).then(item => res.json(item));
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get('/', async (req, res) => {
  if (req.query.search) {
    Item.findAll({
      where: {
        title: {
          [Sequelize.Op.iLike]: `%${req.query.search}%`,
        },
      },
    })
      .then(allItems => res.json(allItems))
      .catch(error => console.log(error));

    return;
  }

  Item.findAll()
    .then(allItems => res.json(allItems))
    .catch(error => console.log(error));
});

router.get('/relative/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const currentItem = await Item.findOne({ where: { id } });
    const relativeItems = await Item.findAll({
      where: {
        categoryType_id: currentItem.categoryType_id,
      },
    });
    const result = relativeItems
      .filter(item => item.id !== Number(id))
      .sort(() => Math.random() - 0.5);
    res.json(result.slice(0, 5));
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Item.destroy({ where: { id } })
    .then(data =>
      data ? res.json({ success: true }) : res.status(404).json(data)
    )
    .catch(error => res.status(500).json({ success: false, message: error }));
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
    const item = await Item.create({
      title,
      description,
      price,
      categoryType_id: categoryType_id.id,
      rating: 0,
      img: filename,
      amount,
    });
    res.json({ success: true, item });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

router.put('/:id', upload.none(), async (req, res) => {
  const itemId = req.params.id;
  const { title, description, price, amount } = req.body;

  const item = await Item.findByPk(itemId);

  try {
    await item.update({
      title,
      description,
      price,
      amount,
    });

    item.save();
    res.json({ success: true, item });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
