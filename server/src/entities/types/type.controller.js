const { Model } = require("mongoose");
const Type = require("./type.model");

const getAll = async (req, res) => {
  try {
    const docs = await Type.find().lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

const addOne = async (req, res) => {
  try {
      const doc = await Type.create(req.body);
      res.status(201).json({results:doc});
  } catch (e) {
    console.error(e);
    res.status(400).end(); 
  }
};

module.exports = {
  getAll,
  addOne,
};
