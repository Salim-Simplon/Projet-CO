const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Produit = new Schema({
  titre: String,
  type: String,
  etat: String,
  sex: String,
  photo: String,
  disponibilité: String,
  description: String,
  prix: Number,
  userId: String,
});

module.exports = mongoose.model("produit", Produit);
