const User = require("../models/users");



const create = (req, res) => {
  res.render("user/create");
};


const home = (req, res) => {
  console.log(req.body);
 Users.create(req.body, (err, credentials) => {
    if (err) {
      return res.redirect("/home");
    }
    console.log(users);
    res.redirect("/");
  });
};
module.exports = { create,home};
