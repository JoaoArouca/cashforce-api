'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      tax: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      adValorem: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      iof: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      },
      sponsorId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('offers')
  }
};
