const User = require('../models/user');

module.exports.getUser = (req,res) => {
  User.find({})
    .then(users => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}

module.exports.getUserId = (req,res) => {
  User.findById(req.params.userId)
      .orFail()
      .then(user =>  res.send({ data: user }))
      .catch((err) => {
        if(err) {
          res.status(404).send({ message: "Такого пользователя нет" });
          return
        }
        res.status(500).send({ message: `Произошла ошибка` });
      });
}

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
      res.status(400).send({ message: "Переданы некорректные данные" });
    } else {
      res.status(500).send({ message: "Ошибка сервера" });
    }
    });
};

module.exports.updateUser = (req, res) => {
  const { name } = req.body;
  User.findByIdAndUpdate(req.user._id, { name: name })
  .orFail()
  .then(user => res.send({ data: user }))
  .catch((err) => {
    if(err) {
      res.status(404).send({ message: 'Ошибка авторизации' })
      return
    }
    res.status(500).send({ message: 'Произошла ошибка' })
  });
};

module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar: avatar })
  .then(user => res.send({ data: user }))
   .catch((err) => {
    if(err) {
      res.status(404).send({ message: 'Ошибка авторизации' })
      return
    }
    res.status(500).send({ message: 'Произошла ошибка' })
  });
};

