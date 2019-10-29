const mongoose = require ('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId, // id do usuario que criou o Booking
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId, // id do spot que criou o usuario reservou 
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);