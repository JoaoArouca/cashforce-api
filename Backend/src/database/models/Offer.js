const { NOW } = require("sequelize");
const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");

const Offer = sequelize.define(
  "Offer",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tariff: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adValorem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    float: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iof: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    paymentStatusProvider: {
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
    orderId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      references: {
        model: "orders",
        key: "id",
      },
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      references: {
        model: "sponsors",
        key: "id",
      },
    },
  },
  { timestamps: true, tableName: "offers" }
);

module.exports = Offer;
