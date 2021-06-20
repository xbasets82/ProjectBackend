const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema(
  {
    elementalTypeID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "elementalType",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    code: {
      type: Number,
      required: true,
    },
    evolutionPokemonTypeID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "pokemonType",
      required: false,
    },
    generationID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "generation",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const pokemonType = mongoose.model("pokemonType", typeSchema);

module.exports = pokemonType;
