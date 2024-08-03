function isAdm(req, res, next) {
  if (req.user.adm) {
    return next()
  }
  
  res.status(401).json({ message: "unauthorized." })
};

module.exports = isAdm;
