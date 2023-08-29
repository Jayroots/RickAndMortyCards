const express = require("express");
const multer = require("multer");
const uploadController = require("../controllers/upload.controller");

const router = express.Router();
const upload = multer({ dest: "./public/tmp" });

router.post("/", upload.single("image"), uploadController);

module.exports = router;
