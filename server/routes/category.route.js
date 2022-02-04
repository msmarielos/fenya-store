const router = require('express').Router();
const { Category } = require('../db/models');

router.get('/', async (req, res) => {
  const allCategories = await Category.findAll();
  res.json(allCategories);
});

module.exports = router;
