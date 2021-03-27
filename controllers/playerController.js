const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Player.find({})
      .then(players => res.json(players))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Player.create(req.body)
      .then(player => res.json(player))
      .catch(err => res.status(422).json(err));
  }
}