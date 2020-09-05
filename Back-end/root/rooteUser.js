const express = require("express");
const route = express.Router();
const fct = require("../controler/controlUser");
route.get("/", fct.fct);
route.post("/", fct.fcp);
route.delete("/:id", fct.fcd);
route.patch("/:id", fct.fcu);
route.post("/login", fct.fcc);
module.exports = route;
