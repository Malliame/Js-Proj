'use strict';
const {
  Model
} = require('sequelize');
const tickets = require('./tickets');
module.exports = (sequelize, DataTypes) => {
  class ticket_solution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.belongsTo(tickets,{foreignKey : 'id', as: 'ticket'});
    }
  }
  ticket_solution.init({
    ticket_id: DataTypes.INTEGER,
    court: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ticket_solution',
  });
  return ticket_solution;
};