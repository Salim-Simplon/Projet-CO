const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Panier = new Schema({
  titre: String,
  type: String,
  etat: String,
  photo: String,
  description: String,
  prix: Number,
  userId: String,
});

module.exports = mongoose.model("panier", Panier);
