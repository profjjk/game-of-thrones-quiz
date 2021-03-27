const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Question.find({})
      .then(questions => res.json(questions))
      .catch(err => res.status(422).json(err));
  }
};