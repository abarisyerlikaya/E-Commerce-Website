// Imports:
const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getLoggedUser,
  forgotPassword,
  resetPassword,
  getUser,
} = require("../controllers/users");
const { getAccessToRoute } = require("../middlewares/auth/auth");

// Router configurations:
router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getLoggedUser);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword", resetPassword);
router.get("/:id", getUser);


module.exports = router;
