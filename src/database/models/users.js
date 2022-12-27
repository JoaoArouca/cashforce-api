const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users",
    {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phoneNumber: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        mobile: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        departament: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        verificationCode: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        emailChecked: {
          type: DataTypes.TINYINT,
          defaultValue: 0,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: NOW(),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: NOW(),
        },
        cashforceAdm: {
          type: DataTypes.TINYINT,
          defaultValue: 0,
        },
      },
    { timestamps: false }
    );
  
    return User;
};
