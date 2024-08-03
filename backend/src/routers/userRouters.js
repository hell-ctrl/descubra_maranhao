const userRouters = require("express").Router();
const UserController = require("../controllers/UserController.js");
const isLogged = require("../middlewares/isLogged.js");
const isAdm = require("../middlewares/isAdm.js");

userRouters.get("/", isLogged, isAdm, UserController.findAll);
userRouters.post("/", UserController.create);
userRouters.patch("/", isLogged, UserController.update);
userRouters.delete("/", isLogged, UserController.delete);

module.exports = userRouters;