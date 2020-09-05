const Users = require("../schema/schemaUser");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
require("dotenv/config");

// Get user

const fct = async (req, res) => {
  const user = await Users.find();
  res.send(user);
};

// Add user

const fcp = async (req, res) => {
  const user = new Users(req.body);
  const salt = await bcrypt.genSalt(10);
  user.pass = await bcrypt.hash(req.body.pass, salt);
  user
    .save()
    .then(() => res.status(201).json(req.body))
    .catch((error) => res.status(400).json({ error }));
};

// // Delete user

const fcd = async (req, res) => {
  Users.findByIdAndRemove({ _id: req.params.id })
    .exec()
    .then((r) => res.send(r))
    .catch((err) => {
      res.status(500).send("error serveur");
      console.log(err);
    });
};

// Update user

const fcu = async (req, res) => {
  Users.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  )
    .exec()
    .then((user) => res.send({ user }))
    .catch((err) => {
      res.status(500).send("mouch mrigla");
      console.log(err);
    });
};

// Connect user

const fcc = async (req, res) => {
  let logger = await Users.findOne({ cin: req.body.cin });
  if (!logger) return res.status(400).send("Email not found");
  let passCorrect = await bcrypt.compare(req.body.pass, logger.pass)
  if (!passCorrect) return res.status(400).send("Information not found");
  const token = JWT.sign({ user: logger }, process.env.secretToken);
  res.send(token);
}; 

module.exports = { fct: fct, fcp: fcp, fcd: fcd, fcu: fcu, fcc: fcc };
