const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const CUserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

CUserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 5, function (err, hash) {
    user.password = hash;
    next();
  });
});

const Cuser = mongoose.model("Cuser", CUserSchema);

module.exports = Cuser;
