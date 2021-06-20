const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
},
{
    timestamps:true,
});

const elementalType = mongoose.model("elementalType", typeSchema);

module.exports = elementalType;
