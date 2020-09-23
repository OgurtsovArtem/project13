const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// eslint-disable-next-line no-undef
const routerUsers = require("./routes/users");
// eslint-disable-next-line no-undef
const routerCards = require("./routes/cards");

// eslint-disable-next-line no-undef
const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});



app.use((req, res, next) => {
  req.user = {
      _id: '5f69eac07ed90f08902c0b71'
  };

  next();
});

// eslint-disable-next-line no-unused-vars
module.exports.createCard = (req, res) => {
  console.log(req.user._id); // _id станет доступен
};

app.use("/", routerUsers);
app.use("/", routerCards);
app.use("*", (req, res) => {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
});

app.listen(PORT);