const { Router } = require("express");
const typeController = require("./elementalTypes.controller");

const types = Router();

types.get("/", typeController.getAll);
types.post("/", typeController.addOne);
types.get("/:id", typeController.getOne);
types.put("/:id", typeController.updateOne);
types.delete("/:id", typeController.removeOne);

module.exports = types;
