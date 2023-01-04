const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");
// const { Order } = require("./Order");
// const { Buyer } = require("./Buyer");
// const { Orderportions } = require("./Orderportions");
// const { Provider } = require("./Provider");
// const { Sponsor } = require("./Sponsor");

const CNPJ = sequelize.define(
  "cnpjs",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    timestamps: true,
    tableName: "cnpjs",
  }
);

// CNPJ.hasMany(Order, { foreignKey: 'cnpjid', as: 'cnpj' });
// CNPJ.hasMany(Buyer, { foreignKey: 'cnpjId', as: 'cnpj' });
// CNPJ.hasMany(Orderportions, { foreignKey: 'cnpjId', as: 'cnpj' });
// CNPJ.hasMany(Provider, { foreignKey: 'cnpjId', as: 'cnpj' });
// CNPJ.hasMany(Sponsor, { foreignKey: 'cnpjId', as: 'cnpj' });

module.exports = CNPJ;
