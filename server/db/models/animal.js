const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Animal.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Animal.init({
    name: {
      type: DataTypes.TEXT,
    },
    isChecked: {
      type: DataTypes.BOOLEAN,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.TEXT,
    },
    breed: {
      type: DataTypes.TEXT,
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
    img: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
