require('dotenv').config();

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: 'Cashforce',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  }
};