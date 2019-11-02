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
}, {
  toJSON: {
    virtuals: true,
  },
});

// criar um virtual, dados que o javascrip vai consumir mas que nao vai ser gravado em banco
SpotSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.thumbnail}`

})


module.exports = mongoose.model('Spot', SpotSchema);