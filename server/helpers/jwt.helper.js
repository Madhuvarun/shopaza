const jwt = require("jsonwebtoken");

function createJWT(id) {
  jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

module.exports = createJWT;
