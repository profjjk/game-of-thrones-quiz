const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  q: { type: String },
  a: [{ type: String }],
  correct: { type: String },
  footnote: { type: String }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;