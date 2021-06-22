const { Router } = require("express");
const typeController = require("./elementalTypes.controller");
const pokemonController = require("../PokemonTypes/PokemonTypes.controller");

const types = Router();

types.get("/", typeController.getAll);
types.post("/", typeController.addOne);
types.get("/:id", typeController.getOne);
types.put("/:id", typeController.updateOne);
types.delete("/:id", typeController.removeOne);

types.get("/:id/pokemons", pokemonController.elementalTypeGetAll);
types.post("/:id/pokemons", pokemonController.elementalTypeAddOne);

module.exports = types;
