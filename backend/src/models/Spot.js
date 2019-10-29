const mongoose = require ('mongoose');

// quais campos usuario vai precisar e tipos

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String], // vetor com varias strind dentro
  user: {
    type: mongoose.Schema.Types.ObjectId, // id do usuario que criou o spot
    ref: 'User'
  }
});

module.exports = mongoose.model('Spot', SpotSchema);