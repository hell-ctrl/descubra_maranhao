const dotenv = require("dotenv").config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
  },
};