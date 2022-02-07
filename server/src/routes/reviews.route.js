const router = require('express').Router();
const { Review } = require('../db/models');

router.get('/:id', (req, res) => {
  Review.findAll({ where: { item_id: req.params.id } }).then((reviews) => {
    res.json(reviews);
  });
});

module.exports = router;
