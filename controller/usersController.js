const user = require("../schemas/usersSchema");
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const foundUser = await user.findOne({
      username: username,
    });
    if (!foundUser) throw new Error("User not found");
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (!validPassword) throw new Error("Password incorrect");
    req.session.user = foundUser
    console.log("Session: " + JSON.stringify(req.session.user));
    res.render("dashboard", {user: foundUser});
  } catch (err) {
    console.log(err);
    res.render("login", { error: err });
  }
}

exports.logout = async (req, res) => {
  try {
    req.session.destroy();
    res.render("login", { error: null })
  } catch (err) {
    console.log(err);
  }
}

exports.getUsers = async (req, res) => {
  try{
    const users = await user.find();
    res.status(200).json(users)
  }catch (err) {
    res.status(500).json({message: "Internal server error"})
  }
}

exports.getAllUsers = async (req, res) => {
  try{
    const users = await user.find();
    res.status(200).json(users)
  }catch (err) {
    res.status(500).json({message: "Internal server error"})
  }
}