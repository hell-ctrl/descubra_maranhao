const attractionRouters = require("express").Router();
const AttractionController = require("../controllers/AttractionController.js");
const isLogged = require("../middlewares/isLogged.js");
const isAdm = require("../middlewares/isAdm.js");

attractionRouters.get("/", AttractionController.findAll);
attractionRouters.get("/recomendeds", AttractionController.recomendeds);
attractionRouters.post("/", isLogged, isAdm, AttractionController.create);
attractionRouters.get("/:attraction_name", AttractionController.findByName);
attractionRouters.patch("/:attraction_id", isLogged, isAdm, AttractionController.update);
attractionRouters.delete("/:attraction_id", isLogged, isAdm, AttractionController.delete);

module.exports = attractionRouters;