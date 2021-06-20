const { Model } = require("mongoose");
const PokemonType = require("./PokemonTypes.model");

const getAll = async (req, res) => {
    try {
      const docs = await PokemonType.find().lean().exec();
      res.status(200).json({ data: docs });
    } catch (e) {
      console.error(e);
      res.status(500).end();
    }
  };
  
  const getOne = async (req, res) => {
    try {
      const doc = await PokemonType.findOne({ _id: req.params.id }).lean().exec();
      if (!doc) {
        return res.status(404).json({ error: `type ${req.params.id} not found` });
      }
      res.status(200).json({ data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };
  
  const removeOne = async (req, res) => {
    try {
      const doc = await PokemonType.findByIdAndRemove({ _id: req.params.id }).lean().exec();
      if (!doc) {
        return res.status(404).json({ error: `type ${req.params.id} not found` });
      }
      res.status(200).json({ data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };
  
  const addOne = async (req, res) => {
    try {
      const doc = await PokemonType.create(req.body);
      res.status(201).json({ data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };
  
  const updateOne = async (req, res) => {
    try {
      const doc = await PokemonType.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      )
        .lean()
        .exec();
      if (!doc) {
        return res.status(400).end();
      }
      res.status(200).json({ data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };
  
  module.exports = {
    getAll,
    addOne,
    getOne,
    updateOne,
    removeOne,
  }; 