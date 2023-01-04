const { NOW } = require("sequelize");
const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");
// const { Order } = require("./Order");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: true, tableName: "users" }
);

// User.hasMany(Order, { foreignKey: "userid", as: "user", });

module.exports = User;
