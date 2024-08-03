const Sequelize = require("sequelize");
const dbConfig = require("../settings/database.js");

const User = require("../models/User.js");
const Attraction = require("../models/Attraction.js");
const AttractionPhoto = require("../models/AttractionPhoto.js");

const connection = new Sequelize(dbConfig);

User.init(connection);
Attraction.init(connection);
AttractionPhoto.init(connection);

Attraction.associate(connection.models);
AttractionPhoto.associate(connection.models);

module.exports = connection;