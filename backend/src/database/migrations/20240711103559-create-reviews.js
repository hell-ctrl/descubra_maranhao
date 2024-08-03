'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      attraction_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "attractions",
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews');
  }
};
