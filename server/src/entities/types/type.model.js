const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim: true,
    maxlength: 50,
}
});

const Type = mongoose.model('type', typeSchema);

module.exports = Type;