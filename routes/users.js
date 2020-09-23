
const router = require("express").Router(); // создали роутер

const { createUser, getUserId, getUser } = require('../controllers/users');

router.post("/users", createUser);
router.get("/users/:userId", getUserId);
router.get("/users", getUser);

module.exports = router;
