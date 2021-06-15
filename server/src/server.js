

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const config = require("./config");
const db = require("./db");
const typeRouter = require("./entities/types/type.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/types", typeRouter);


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
