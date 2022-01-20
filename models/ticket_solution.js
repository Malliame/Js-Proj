'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket_solution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ticket_solution.init({
    court: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ticket_solution',
  });
  return ticket_solution;
};