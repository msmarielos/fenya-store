const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Item }) {
      Review.belongsTo(User, { foreignKey: 'user_id' });
      Review.belongsTo(Item, { foreignKey: 'item_id' });
    }
  }
  Review.init({
    isChecked: {
      type: DataTypes.BOOLEAN,
    },
    title: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
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
    rating: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
