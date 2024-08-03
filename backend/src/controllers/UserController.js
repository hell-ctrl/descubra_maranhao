const bcrypt = require("bcryptjs");
const { Sequelize } = require("sequelize");
const User = require("../models/User.js");

class UserController {
  static async create(req, res) {
    let { name, email, password } = req.body;
    
    try {
      const isEmailInUse = await User.findOne({ where: { email }});
      
      if (isEmailInUse) {
        return res.status(400).json({ message: "This email is already in use." });
      }
      
      const salt = bcrypt.genSaltSync(10);
      password = bcrypt.hashSync(password, salt);
      
      const newUser = await User.create({ name, email, password });
    
      newUser.password = undefined;
      
      res.status(201).json(newUser);
      
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  }
  
  static async findAll(req, res) {
    const { q, page = 1, per_page = 10 } = req.query;
    
    try {
      const limit = parseInt(per_page);
      const offset = (parseInt(page) - 1) * limit;

      let usersFromDB;
      
      if (q) {
        usersFromDB = await User.findAndCountAll({
          where: {
            [Sequelize.Op.or]: [
              { name: { [Sequelize.Op.like]: `%${q}%` } },
              { email: { [Sequelize.Op.like]: `%${q}%` } }
            ]
          },
          limit,
          offset
        });
      } else {
        usersFromDB = await User.findAndCountAll({
          limit,
          offset
        });
      }

      res.status(200).json({
        total: usersFromDB.count,
        pages: Math.ceil(usersFromDB.count / limit),
        users: usersFromDB.rows
      });
      
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  }
  
  static async update(req, res) {
    let { name, password, new_password, profile_photo, adm } = req.body;
    let { user_id } = req.query;
    
    try {
      const userId = (req.user.adm && user_id) ? user_id : req.user.id;
      
      const userToUpdate = await User.findByPk(userId, {
        attributes: { include: ['password'] }
      });
      
      if (!userToUpdate) {
        return res.status(404).json({ message: "User not found." });
      }
      
      if (password && new_password) {
        const passwordMatch = bcrypt.compareSync(password, userToUpdate.password);
        
        if (!passwordMatch) {
          return res.status(400).json({ message: "Current password does not match." });
        }
        
        const salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(new_password, salt);
      } else {
        password = userToUpdate.password;
      }
      
      if (adm && !req.user.adm) {
        return res.status(403).json({ message: "Only admins can change admin status." });
      }
      
      await User.update(
        { name, password, profile_photo, adm }, 
        { where: { id: userId } }
      );
      
      const updatedUser = await User.findByPk(userId);
      
      updatedUser.password = undefined;
      
      res.status(200).json(updatedUser);
      
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  }
    
  static async delete(req, res) {
    const { user_id } = req.query;
    
    try {
      const userId = (req.user.adm && user_id) ? user_id : req.user.id;
      
      const userToDelete = await User.findByPk(userId);
    
      if (!userToDelete) {
        return res.status(404).json({ message: "User not found." });
      }
        
      await User.destroy({
         where: { id: userId }
      });
    
      res.status(204).send();
    
    } catch (error) {
      res.status(500).json({ message: "An internal error occurred.", error: error.message });
    }
  }
}

module.exports = UserController;
