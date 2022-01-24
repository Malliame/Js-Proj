'use strict';
const {
  Model
} = require('sequelize');
const ticket_solutions= require('./ticket_solution');
const ticket_types = require('./ticket_type');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.belongsTo(User,{foreignKey : 'id', as: 'reciever'});
      //this.belongsTo(User,{foreignKey : 'id', as: 'giver'});
      //this.hasOne(ticket_types,{foreignKey: 'id', as: 'type'});
      //this.hasOne(ticket_solutions,{foreignKey: 'id', as: 'solution'});
    }
  }
  ticket.init({
    due_date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    solved: DataTypes.BOOLEAN,
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    solution: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'tickets',
  });
  return ticket;
};