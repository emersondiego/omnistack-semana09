const Spot = require('../models/Spot')

module.exports = {  // lista spots do usuario
  async show(req, res) {
    const { user_id } = req.headers;

    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
}