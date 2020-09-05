const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require('path');
const cors = require("cors");

const app = express();

connectDB();
app.use(express.json());
app.use(cors());

const route = require("./root/rooteUser");
app.use("/users", route);



const route2 = require("./root/rootePanier");
const { request } = require("express");
app.use("/paniers", route2);

app.use("/public_img", express.static("public_img"));

 //upload feature

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public_img");
  },
  filename: function (req, file, cb) {
    let a = file.originalname.split(".")[0] + "_" + Date.now();
    let b = file.originalname.split(".")[1];
    let c = a + "." + b;
    cb(null, c);
  },
});
function fileFilter(req, file, cb) {
  var filetypes = /jpeg|jpg|png/;
  var mimetype = filetypes.test(file.mimetype);
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb("Error: File upload only supports the following filetypes - " + filetypes);
}

let upload = multer({ storage: storage, fileFilter: fileFilter });
app.use("/*", upload.single("photo"));

//end upload feature 

const route1 = require("./root/rooteProduct");
app.use("/produits", route1);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
