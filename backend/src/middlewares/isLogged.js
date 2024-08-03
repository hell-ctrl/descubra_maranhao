const jwt = require("jsonwebtoken");

function isLogged(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    
    const user = jwt.verify(token, process.env.AUTH_SECRET);
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "unauthorized." });
  }
};

module.exports = isLogged;