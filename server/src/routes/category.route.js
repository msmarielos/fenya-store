const router = require("express").Router();
const { Category } = require("../db/models");

router.get("/cats", async (req, res) => {
  const allCategories = await Category.findAll();
  res.json(allCategories);
});

router.get("/dogs", async (req, res) => {
  const allCategories = await Category.findAll();
  res.json(allCategories);
});

module.exports = router;
