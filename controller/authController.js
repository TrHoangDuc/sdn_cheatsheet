const user = require("../schemas/usersSchema");
const bcrypt = require('bcrypt');
const generateJWTToken = require("../utils/generateJWTToken");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const foundUser = await user.findOne({
      username: username,
    });
    if (!foundUser) return res.status(400).json({ message: "User not found" });
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (!validPassword) return res.status(400).json({ message: "Password incorrect" });
    const token = generateJWTToken(foundUser);
    return res.status(200).json({
      token: token
    });
  } catch (err) {
    console.error("Error logging in user:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
