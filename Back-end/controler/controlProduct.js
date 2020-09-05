const Products = require("../schema/schemaProduit");

// Get product

const fct = async (req, res) => {
  const product = await Products.find();
  res.send(product);
};

// Get product by id

const fci = async (req, res) => {
  try {
    const product = await Products.find({ userId: req.params._id });
    res.send(product);
  } catch (er) {
    res.send(er);
  }
};

// Add product

const fcp = async (req, res) => {
  new Products({
    titre: req.body.titre,
    type: req.body.type,
    etat: req.body.etat,
    sex: req.body.sex,
    disponibilité: req.body.disponibilité,
    description: req.body.description,
    prix: req.body.prix,
    photo: req.file.path,
    // photo: req.body.photo,
    userId: req.body.userId,
  })
    .save()
    .then(() => res.status(201).json({ message: "Produit ajouté !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Delete product

const fcd = async (req, res) => {
  Products.findByIdAndRemove({ _id: req.params.id })
    .exec()
    .then((r) => res.send(r))
    .catch((err) => {
      res.status(500).send("error serveur");
      console.log(err);
    });
};

// Update product

const fcu = async (req, res) => {
  Products.update(
    { _id: req.params.id },
    {
      $set: {
        titre: req.body.titre,
        type: req.body.type,
        etat: req.body.etat,
        sex: req.body.sex,
        disponibilité: req.body.disponibilité,
        description: req.body.description,
        prix: req.body.prix,
        photo: req.file.path,
        userId: req.body.userId,
      }
    }
  )
    .exec()
    .then((product) => res.send({ product }))
    .catch((err) => {
      res.status(500).send("mouch mrigla");
      console.log(err);
    });
};

module.exports = { fct: fct, fcp: fcp, fcd: fcd, fcu: fcu, fci: fci };
