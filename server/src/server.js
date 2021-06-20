

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const config = require("./config");
const db = require("./db");

const elementalTypesRouter = require("./entities/elemetalTypes/elementalTypes.router");
const pokemonTypesRouter = require("./entities/PokemonTypes/PokemonTypes.router");
const generationsRouter = require("./entities/generations/generations.router");


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/elementalTypes", elementalTypesRouter);
app.use("/api/pokemonTypes", pokemonTypesRouter);
app.use("/api/generations", generationsRouter);


const startServer = async () => {
  try {
    await db.connect();
    app.listen(config.port, () => {
      console.log(`Api Listening on ${config.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

startServer();
