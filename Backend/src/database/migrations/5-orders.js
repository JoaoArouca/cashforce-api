'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      orderNfId: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      CTE: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      value: {
        type: Sequelize.STRING(255),
        defaultValue: null,
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
      cnpjId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      },
      userId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      },
      buyerId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      },
      providerId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      deliveryCtrc: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('orders')
  }
};
