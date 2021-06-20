const {Router}= require("express");
const generationController = require("./generations.controller");


const generations = Router();

generations.get("/", generationController.getAll);
generations.post("/", generationController.addOne);
generations.get("/:id", generationController.getOne);
generations.put("/:id", generationController.updateOne);
generations.delete("/:id", generationController.removeOne);

module.exports = generations;