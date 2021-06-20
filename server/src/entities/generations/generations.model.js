const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  year:{
      type:Number,
      required: true,
  },
  region:{
      type:String,
      required: true,
      maxlength:50,
  },
  numberOfPokemon:{
      type:Number,
      required:true,
  }
},
{
    timestamps:true,
});

const elementalType = mongoose.model("generation", typeSchema);

module.exports = elementalType;
