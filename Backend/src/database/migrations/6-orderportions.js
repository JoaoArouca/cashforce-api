'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nDup: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      dVenc: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      vDup: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      availableToMarket: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: NOW(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: NOW(),
      },
      orderId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('orderportions')
  }
};
