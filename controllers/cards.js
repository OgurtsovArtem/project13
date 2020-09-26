const Card = require('../models/card');

module.exports.getCard = (req,res) => {
  Card.find({})
    .then(cards => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}
module.exports.deleteCardId = (req,res) => {
  Card.findByIdAndRemove(req.params.cardId)
      .orFail()
      .then(card => res.send({ data: card }))
      .catch((err) => {
        if(err){
          res.status(404).send({ message: `Карточка не найдена` })
          return
        }
        res.status(500).send({ message: `Произошла ошибка` })
      });
}
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then(card => res.send({ data: card }))
    .catch((err) => {
      if (err.name === "ValidationError") {
      res.status(400).send({ message: "Переданы некорректные данные" });
    } else {
      res.status(500).send({ message: "Ошибка сервера" });
    }
    });
};
module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
.then(card => res.send({ data: card }))
.catch((err) => {
  if(err) {
    res.status(404).send({ message: 'Карта не найдена' })
    return
  }
  res.status(500).send({ message: 'Произошла ошибка' })
});
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true },
)
.orFail()
.then(card => res.send({ data: card }))
.catch((err) => {
  if(err) {
    res.status(404).send({ message: 'Карта не найдена' })
    return
  }
  res.status(500).send({ message: 'Произошла ошибка' })
});
};