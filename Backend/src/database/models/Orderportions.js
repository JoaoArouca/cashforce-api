const { NOW } = require("sequelize");
const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");
// const { CNPJ } = require("./CNPJ");
const Orderportions = sequelize.define(
  "orderportions",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    nDup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dVenc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vDup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availableToMarket: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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
  },
  { timestamps: false, tableName: "orderportions" }
);

// Orderportions.belongsTo(CNPJ, { foreignKey: "cnpjId", as: "cnpj", });

module.exports = Orderportions;
