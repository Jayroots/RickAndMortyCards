const express = require("express");

const { getAllCharacters, getCharacterById, createCharacter } = require("../controllers/rickCharacter.controller.js");

const router = express.Router();

router.get("/characters", getAllCharacters);
router.get("/characters/:id", getCharacterById);
router.post("/characters",createCharacter);

module.exports = router;