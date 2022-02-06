const router = require('express').Router();
const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  const animals = await Animal.findAll();
  res.json(animals);
});

// router.post('/', async (req, res) => {
//   const order = req.body;
//   const newOrder = await Order.create({
//     user_id: 1,
//   });
//   try {
//     order.forEach(async el => {
//       await OrderItem.create({
//         order_id: newOrder.id,
//         item_id: el.id,
//         count: el.count,
//       });
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
