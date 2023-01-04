require("dotenv").config();
const { Sequelize } = require("sequelize");

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATA,
  username: process.env.DB_USER,
  password: Number(process.env.DB_PASS),
  dialect: "mysql",
};

const sequelize = new Sequelize(options.database, options.username, options.password, options);

module.exports = sequelize;
