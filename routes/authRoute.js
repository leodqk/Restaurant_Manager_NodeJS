const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");
const router = express.Router();

// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

module.exports = router;
