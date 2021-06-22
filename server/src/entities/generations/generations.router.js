const {Router}= require("express");
const generationController = require("./generations.controller");
const pokemonController = require("../PokemonTypes/PokemonTypes.controller");


const generations = Router();

generations.get("/", generationController.getAll);
generations.post("/", generationController.addOne);
generations.get("/:id", generationController.getOne);
generations.put("/:id", generationController.updateOne);
generations.delete("/:id", generationController.removeOne);

generations.get("/:id/pokemons", pokemonController.generationGetAll);

module.exports = generations;