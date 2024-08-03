const authRouter = require("express").Router();
const AuthController = require("../controllers/AuthController.js");

authRouter.post("/", AuthController.login);

module.exports = authRouter;