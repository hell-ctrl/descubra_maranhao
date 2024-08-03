const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      adm: DataTypes.BOOLEAN,
      profile_photo: DataTypes.STRING,
      password: DataTypes.STRING
    }, { 
      sequelize,
      defaultScope: {
        attributes: { exclude: ['password'] }
      }
    })
  }
};

module.exports = User;