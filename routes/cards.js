
/* eslint-disable no-undef */
const router = require("express").Router();

const { getCard, deleteCardId, createCard } = require('../controllers/cards')

router.get("/cards", getCard);
router.post("/cards", createCard);
router.delete("/cards/:cardId", deleteCardId);


module.exports = router;