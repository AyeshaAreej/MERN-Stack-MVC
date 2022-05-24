const Credentials = require("../models/credentials");

const login = (req, res) => {
  res.render("user/login");
};

const create = (req, res) => {
  res.render("user/create");
};


const signup = (req, res) => {
  console.log(req.body);
  Credentials.create(req.body, (err, credentials) => {
    if (err) {
      return res.redirect("/signup");
    }
    console.log(credentials);
    res.redirect("/");
  });
};
module.exports = { create, signup, login };
