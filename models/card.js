const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    match: [/^(((https?):\/\/)?(www\.)?[^\W_][A-z0-9-]*\.[^\W_0-9]{1,8})*(\/(\w[#!:.?+=&%@!\-/])*)?([/#-]\w+[/#.-]?)*$/,'Некорректный URL']
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  likes: {
    // eslint-disable-next-line no-undef
    type:  mongoose.Schema.Types.ObjectId,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);