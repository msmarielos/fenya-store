const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal, Order, Review }) {
      User.hasMany(Animal, { foreignKey: 'user_id' });
      User.hasMany(Order, { foreignKey: 'user_id' });
      User.hasMany(Review, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
    phone: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
