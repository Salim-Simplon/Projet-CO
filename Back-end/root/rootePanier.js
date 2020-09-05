const express = require("express");
const route = express.Router();
const fct = require("../controler/controlPanier");
route.get("/", fct.fct);
route.get("/:_id", fct.fci);
route.post("/", fct.fcp);
route.delete("/:id", fct.fcd);
module.exports = route;