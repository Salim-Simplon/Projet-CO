const Paniers = require("../schema/schemaPanier");

// Get panier

const fct = async (req, res) => {
  const panier = await Paniers.find();
  res.send(panier);
};

// Get panier by id

const fci = async (req, res) => {
  try {
  const panier = await Paniers.find({ userId : req.params._id});
  res.send(panier);
}
catch (er){
  res.send(er)
}
};

// Add panier

const fcp = async (req, res) => {
  const panier = new Paniers(req.body);
  panier
    .save()
    .then(() => res.status(201).json({ message: "Produit ajouté au panier !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Delete panier

const fcd = async (req, res) => {
  Paniers.findByIdAndRemove({ _id: req.params.id })
    .exec()
    .then((r) => res.send(r))
    .catch((err) => {
      res.status(500).send("error serveur");
      console.log(err);
    });
};

module.exports = { fct: fct, fcp: fcp, fcd: fcd, fci: fci };
