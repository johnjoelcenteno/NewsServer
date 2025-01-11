const express = require("express");
const router = express.Router();

const { GetNewController } = require("../controllers/Tasks.controller");

router.get("/", GetNewController);

module.exports = router;
