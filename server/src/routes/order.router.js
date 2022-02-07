const router = require('express').Router();
const { OrderItem, Order, User, Item } = require('../db/models');

router.post('/', async (req, res) => {
  const order = req.body;
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

router.get("/", async (req, res) => {
  // const currentUser = User.findOne();
  const allOrders = await OrderItem.findAll(
    {
      include: [Order, Item],
    },
    { raw: true }
  );
 
  try {
    const allOrders = await OrderItem.findAll(
      {
        include: [Order, Item],
      },
      { raw: true }
    );
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  OrderItem.destroy({ where: { id } })
    .then(data =>
      data ? res.json({ success: true }) : res.status(404).json(data)
    )
    .catch(error => res.status(500).json({ success: false, message: error }));
});

module.exports = router;
