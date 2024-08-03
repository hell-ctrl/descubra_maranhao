const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const generateJwt = require("../utils/generateJwt.js");
const { existsOrError, isValidEmailOrError, isValidPasswordOrError, equalOrError } = require("../utils/validateFields.js");

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;
    
    try {
      const userFromDB = await User.findOne({ 
        where: { email },
        attributes: { include: ['password'] }
      });
      existsOrError(userFromDB, "invalid user/password.");
      
      const passwordMatch = bcrypt.compareSync(password, userFromDB.password);
      equalOrError(passwordMatch, true, "invalid user/password.");
      
      const token = generateJwt({
        id: userFromDB.id,
        adm: userFromDB.adm
      })
      
      res.status(200).json({ token })
      
    } catch (error) {
      res.status(400).json({ message: error })
    }
  }
};

module.exports = AuthController;