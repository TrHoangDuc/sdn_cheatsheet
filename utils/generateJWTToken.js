const jwt = require("jsonwebtoken");

const generateJWTToken = (user) => {
  const payload = {
    // userId: user._id,
    user: user
  };
  const secretKey = 'hoangduc123';
  const token = jwt.sign(payload, secretKey, { expiresIn: "6h" }); 
  return token;
}

module.exports = generateJWTToken;