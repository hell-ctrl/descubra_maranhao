'use strict';

const dotenv = require("dotenv").config();

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: process.env.USER_NAME,
      email: process.env.USER_EMAIL,
      adm: process.env.USER_ADM,
      password: process.env.USER_PASSWORD,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
