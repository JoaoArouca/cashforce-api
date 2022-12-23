const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tradingName: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      cashforceTax: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      responsibleName: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      responsibleEmail: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      responsiblePosition: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      responsiblePhone: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      responsibleMobile: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      website: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      postalCode: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      address: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      number: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      complement: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      neighborhood: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      city: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      situation: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      situationDate: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      createdAt: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: NOW(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW(),
      },
      cnpjId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      confirm: {
        type: DataTypes.TINYINT(1),
        defaultValue: 1,
      },
      email: {
        type: DataTypes.STRING(255),
        defaultValue: null,
      }
    },
    { timestamps: false }
    );
  
    return User;
};
