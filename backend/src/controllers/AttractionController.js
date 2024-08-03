const { Sequelize } = require("sequelize");
const Attraction = require("../models/Attraction.js");
const AttractionPhoto = require("../models/AttractionPhoto.js");

class AttractionController {
  static async create(req, res) {
    const { name, city, description, maps, photo_urls } = req.body;
    
    try {
      const newAttraction = await Attraction.create({
        name,
        city,
        description,
        maps
      });
      
      const attractionImages = photo_urls.map(url => ({
        photo_url: url,
        attraction_id: newAttraction.id
      }));
      
      await AttractionPhoto.bulkCreate(attractionImages);
       
      const attractionWithPhotos = await Attraction.findByPk(newAttraction.id, {
        include: { association: "attraction_photos" }
      });
      
      res.status(201).json(attractionWithPhotos);
      
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  };
  
  static async findByName(req, res) {
    const { attraction_name } = req.params;
    const formattedName = attraction_name.replace(/\+/g, ' ');
    
    try {
      const attractionFromDB = await Attraction.findOne({
        where: { name: formattedName },
        include: { association: "attraction_photos" }
      });
      
      if (!attractionFromDB) {
        return res.status(404).json({ message: "Attraction not found" });
      }
      
      res.status(200).json(attractionFromDB);
    } catch(error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message })
    }
  }
  
  static async findAll(req, res) {
    const { q = '', page = 1, per_page = 10 } = req.query;
    
    try {
      const limit = parseInt(per_page);
      const offset = (parseInt(page) - 1) * limit;

      const where = q ? {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${q}%` } },
          { city: { [Sequelize.Op.like]: `%${q}%` } }
        ]
      } : {};

      const attractionsFromDB = await Attraction.findAndCountAll({
        where,
        include: { association: "attraction_photos" },
        distinct: true,
        limit,
        offset
      });

      res.status(200).json({
        total: attractionsFromDB.count,
        pages: Math.ceil(attractionsFromDB.count / limit),
        attractions: attractionsFromDB.rows
      });
      
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  };
  
  static async recomendeds(req, res) {
    const { limit } = req.query;
    
    try {
      const attractions = await Attraction.findAll({
        order: Sequelize.literal("rand()"),
        include: { association: "attraction_photos" },
        limit: parseInt(limit) || 5
      });
      
      res.status(200).json(attractions);
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  };
  
  static async update(req, res) {
    const { name, city, description, maps } = req.body;
    const { attraction_id } = req.params;
    
    try {
      const attractionToUpdate = await Attraction.findByPk(attraction_id);

      if (!attractionToUpdate) {
        return res.status(404).json({ message: "Attraction not found." });
      }

      await Attraction.update(
        { name, city, description, maps },
        { where: { id: attraction_id } }
      );

      const updatedAttraction = await Attraction.findByPk(attraction_id, {
        include: { association: "attraction_photos" }
      });

      res.status(200).json(updatedAttraction);
      
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  };
  
  static async delete(req, res) {
    const { attraction_id } = req.params;
  
    try {
      const attractionToDelete = await Attraction.findByPk(attraction_id);
  
      if (!attractionToDelete) {
        return res.status(404).json({ message: "Attraction not found." });
      }
      
      await Attraction.destroy({
        where: { id: attraction_id }
      });
  
      res.status(204).send();
  
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  };
};

module.exports = AttractionController;
