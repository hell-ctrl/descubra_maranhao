'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profile_photo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "https://i3.wp.com/cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png?resize=728%2C728&ssl=1"
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      adm: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.dropTable('users');
  }
};
