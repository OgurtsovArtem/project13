const Card = require('../models/card');

module.exports.getCard = (req,res) => {
  Card.find({})
    .then(cards => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}
module.exports.deleteCardId = (req,res) => {
  Card.findByIdAndRemove(req.params.cardId)
      .then(card => res.send({ data: card }))
      .catch(() => res.status(500).send({ message: `Произошла ошибка` }));
}
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then(card => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};