'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('attraction_photos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      attraction_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'attractions',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      photo_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('attraction_photos');
  }
};
