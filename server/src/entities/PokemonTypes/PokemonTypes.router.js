const {Router}= require("express");
const pokemonTypeController = require("./PokemonTypes.controller");


const pokemonTypes = Router();

pokemonTypes.get("/", pokemonTypeController.getAll);
pokemonTypes.post("/", pokemonTypeController.addOne);
pokemonTypes.get("/:id", pokemonTypeController.getOne);
pokemonTypes.put("/:id", pokemonTypeController.updateOne);
pokemonTypes.delete("/:id", pokemonTypeController.removeOne);

module.exports = pokemonTypes;