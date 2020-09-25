// Libraries:
const express = require('express');
const router = express.Router();

// Router configurations:
const users = require("./users");

router.use("/users",users);

module.exports = router;