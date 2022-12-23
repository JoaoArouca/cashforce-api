'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tradingName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      cashforceTax: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      responsibleName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      responsibleEmail: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      responsiblePosition: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      responsiblePhone: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      responsibleMobile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      website: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      postalCode: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      address: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      number: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      complement: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      neighborhood: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      city: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      state: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      situation: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      situationDate: {
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
        allowNull: false,
      },
      confirm: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
      },
      email: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      }

    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('buyers')
  }
};
