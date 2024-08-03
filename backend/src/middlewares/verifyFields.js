const { existsOrError, notExistsOrError, equalOrError, isValidEmailOrError, isValidPasswordOrError, validTypeOrError } = require("../utils/validateFields.js");

function verifyFields(req, res, next) {
  const { name, email, password, new_password, adm, profile_photo } = req.body;
  const { city, description, maps, photo_urls } = req.body;
  const { user_id, q, per_page, page } = req.query;
  
  try {
    validTypeOrError(name, "string", "the value of the field (name) is not what was expected.");
    validTypeOrError(email, "string", "the value of the field (email) is not what was expected.");
    validTypeOrError(password, "string", "the value of the field (password) is not what was expected.");
    validTypeOrError(new_password, "string", "the value of the field (new_password) is not what was expected.");
    validTypeOrError(user_id, "number", "the value of the field (user_id) is not what was expected.");
    validTypeOrError(profile_photo, "string", "the value of the field (profile_photo) is not what was expected.");
    validTypeOrError(adm, "boolean", "the value of the field (adm) is not what was expected.");
    
    validTypeOrError(page, "number", "the value of the field (page) is not what was expected.");
    validTypeOrError(per_page, "number", "the value of the field (per_page) is not what was expected.");
    validTypeOrError(q, "string", "the value of the field (q) is not what was expected.");
    validTypeOrError(photo_urls, "array", "the value of the field (photo_urls) is not what was expected.");
    
    validTypeOrError(city, "string", "the value of the field (city) is not what was expected.");
    validTypeOrError(description, "string", "the value of the field (description) is not what was expected.");
    validTypeOrError(maps, "string", "the value of the field (maps) is not what was expected.");
    
    if (req.method == "POST") {
      if (req.originalUrl.startsWith("/user")) {
        existsOrError(name, "field (name) not provided.");
        existsOrError(email, "field (email) not provided.");
        existsOrError(password, "field (password) not provided.");
        isValidEmailOrError(email, "the email provided is not valid.");
        isValidPasswordOrError(password, "the password provided is not valid.");
      };
      if (req.originalUrl.startsWith("/auth")) {
        existsOrError(email, "field (email) not provided.");
        existsOrError(password, "field (password) not provided");
        isValidEmailOrError(email, "the email provided is not valid.");
        isValidPasswordOrError(password, "the email password is not valid.");
      };
      if (req.originalUrl.startsWith("/attraction")) {
        existsOrError(name, "field (name) not provided.");
        existsOrError(city, "field (city) not provided");
        existsOrError(description, "field (description) not provided.");
        existsOrError(maps, "field (maps) not provided.");
        existsOrError(photo_urls, "field (photo_urls) not provided.");
      }
    };
    if (req.method == "PATCH") {
      if (req.originalUrl.startsWith("/user")) {
        if (!name && adm === undefined && !profile_photo && !(password && new_password)) {
          throw "insert at least one field.";
        }
      };
      if (req.originalUrl.startsWith("/attraction")) {
        if (!name && !city && !description && !maps) {
          throw "insert at least one field.";
        }
      }
    }
    
    next()
    
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

module.exports = verifyFields;