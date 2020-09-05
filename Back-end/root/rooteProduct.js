const express = require("express");
const route = express.Router();
const fct = require("../controler/controlProduct");
route.get("/", fct.fct);
route.get("/:_id", fct.fci);
route.post("/", fct.fcp);
route.delete("/:id", fct.fcd);
route.put("/:id", fct.fcu);
module.exports = route;
