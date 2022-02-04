const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ OrderItem, Review, CategoryType }) {
      Item.hasOne(OrderItem, { foreignKey: 'item_id' });
      Item.hasMany(Review, { foreignKey: 'item_id' });
      Item.belongsTo(CategoryType, { foreignKey: 'categoryType_id' });
    }
  }
  Item.init({
    title: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    categoryType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CategoryTypes',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
