'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      mobile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      departament: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      verificationCode: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      emailChecked: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
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
      cashforceAdm: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users')
  }
};
