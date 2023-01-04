require("dotenv").config();
const { Sequelize } = require("sequelize");

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: "Cashforce",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
    
  }
};

const sequelize = new Sequelize(options.database, options.username, options.password, options);

module.exports = sequelize;
