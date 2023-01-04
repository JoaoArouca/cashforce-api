const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");
// const { Order } = require("./Order");
// const { CNPJ } = require("./CNPJ");

const Provider = sequelize.define(
  "Provider",
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
    bank: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    bankAgency: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    account: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    documents: {
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
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      references: {
        model: "cnpjs",
        key: "id",
      },
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  { timestamps: true, tableName: "providers" }
);

// Provider.hasMany(Order, { foreignKey: "providerid", as: "provider", });
// Provider.belongsTo(CNPJ, { foreignKey: "cnpjid", as: "cnpj" });

module.exports = Provider;
