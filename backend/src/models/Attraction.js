const { Model, DataTypes } = require('sequelize');

class Attraction extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      latitude: DataTypes.DOUBLE,
      longitude: DataTypes.DOUBLE,
      description: DataTypes.TEXT,
    }, { sequelize })
  };
  
  static associate(models) {
    this.hasMany(models.AttractionPhoto, { foreignKey: 'attraction_id', as: 'attraction_photos' });
  }
};

module.exports = Attraction;