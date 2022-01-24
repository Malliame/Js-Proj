'use strict';

const ticket_solution = require("../models/ticket_solution");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      due_date: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.INTEGER
      },
      solved: {
        type: Sequelize.BOOLEAN
      }, 
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference:{
          model: 'tiket_types',
          key: 'id'
        }
      },
      solution: {
        type: Sequelize.INTEGER,
        allowNull: true,
        reference:{
          model: 'ticket_solutions',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tickets');
  }
};