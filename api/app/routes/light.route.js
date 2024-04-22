const express = require("express");
const { container, setup } = require("../loaders/di.js");

setup();
const router = express.Router();
const lightController = container.resolve("lightController");
router.get("/all", lightController.getAll);

module.exports = router;
