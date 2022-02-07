const router = require('express').Router();
const { OrderItem, Order } = require('../db/models');

router.post('/', async (req, res) => {
  const order = req.body;
  console.log(req.userId, '<<<<<<userId');
  const newOrder = await Order.create({
    user_id: 1,
  });
  try {
    order.forEach(async el => {
      await OrderItem.create({
        order_id: newOrder.id,
        item_id: el.id,
        count: el.count,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
