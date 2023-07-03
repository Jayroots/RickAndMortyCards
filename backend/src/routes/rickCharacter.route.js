const express = require("express");

const { getAllCharacters, getCharacterById } = require("../controllers/rickCharacter.controller.js");

const router = express.Router();

router.get("/characters", getAllCharacters);
router.get("/characters/:id", getCharacterById);

module.exports = router;