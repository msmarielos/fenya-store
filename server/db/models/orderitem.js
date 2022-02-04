const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Item }) {
      OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
      OrderItem.belongsTo(Item, { foreignKey: 'item_id' });
    }
  }
  OrderItem.init({
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Items',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};
