const router = require('express').Router();
const { Review } = require('../db/models');
const { Item } = require('../db/models');

router.get('/:id', (req, res) => {
  Review.findAll({ where: { item_id: req.params.id } }).then(reviews => {
    res.json(reviews);
  });
});

router.post('/:id', async (req, res) => {
  const { title, description, item_id, rating } = req.body;
  const currentItem = await Item.findOne({ where: { id: item_id } });
  if (currentItem.rating > 5) {
    await currentItem.update({
      rating: 5,
    });
  } else {
    await currentItem.update({
      rating: Math.floor(rating + currentItem.rating / 2),
    });
  }
  const newReview = await Review.create({
    title,
    description,
    item_id,
    rating,
    user_id: 1,
    isChecked: true,
  });
  res.json(newReview);
});

module.exports = router;
