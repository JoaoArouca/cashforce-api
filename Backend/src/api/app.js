const express = require("express");
const router = require("../routes/index");

const entities = {
  CNPJ: require("../database/models/CNPJ"),
  Buyer: require("../database/models/Buyer"),
  User: require("../database/models/User"),
  Provider: require("../database/models/Provider"),
  Sponsor: require("../database/models/Sponsor"),
  Order: require("../database/models/Order"),
  Offer: require("../database/models/Offer"),
  Orderportions: require("../database/models/Orderportions"),
};

// Criando os relacionamentos do sequelize
entities.CNPJ.hasMany(entities.Order, { foreignKey: "cnpjid" });
entities.CNPJ.hasMany(entities.Buyer, { foreignKey: "cnpjId" });
entities.CNPJ.hasMany(entities.Orderportions, { foreignKey: "cnpjId" });
entities.CNPJ.hasMany(entities.Provider, { foreignKey: "cnpjId" });
entities.CNPJ.hasMany(entities.Sponsor, { foreignKey: "cnpjId" });
entities.User.hasMany(entities.Order, { foreignKey: "userid", as: "user" });
entities.Orderportions.belongsTo(entities.CNPJ, { foreignKey: "cnpjId" });
entities.Buyer.hasMany(entities.Order, { foreignKey: "buyerid", as: "buyer" });
entities.Buyer.belongsTo(entities.CNPJ, { foreignKey: "cnpjId" });
entities.Order.belongsTo(entities.CNPJ, { foreignKey: "cnpjid" });
entities.Order.belongsTo(entities.User, { foreignKey: "userid", as: "user" });
entities.Order.belongsTo(entities.Buyer, { foreignKey: "buyerid", as: "buyer" });
entities.Order.belongsTo(entities.Provider, { foreignKey: "providerid", as: "provider" });
entities.Provider.hasMany(entities.Order, { foreignKey: "providerid", as: "provider" });
entities.Provider.belongsTo(entities.CNPJ, { foreignKey: "cnpjid" });
entities.Sponsor.belongsTo(entities.CNPJ, { foreignKey: "cnpjId" });

const app = express();

app.use(router);
app.use(express.json());

module.exports = app;
