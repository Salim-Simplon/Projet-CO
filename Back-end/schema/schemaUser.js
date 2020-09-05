const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Users = new Schema({
  name: String,
  mail: String,
  pass: String,
  tel: String,
  adress: String,
  role: String,
  cin: String,
});

module.exports = mongoose.model("user", Users);
