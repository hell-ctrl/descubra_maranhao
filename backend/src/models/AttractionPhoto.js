const { Model, DataTypes } = require('sequelize');

class AttractionPhoto extends Model {
  static init(sequelize) {
    super.init({
      photo_url: DataTypes.STRING,
    }, { sequelize })
  };
  
  static associate(models) {
    this.belongsTo(models.Attraction, { foreignKey: 'attraction_id', as: 'attraction' });
  };
};

module.exports = AttractionPhoto;
