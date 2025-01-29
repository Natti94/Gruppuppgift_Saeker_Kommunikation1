const express = require("express");
const {
  authenticateToken,
  authorizeAdmin,
  secure,
  adminOnly,
  register,
  login,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/secure", authenticateToken, secure);
router.get("/admin", authenticateToken, authorizeAdmin, adminOnly);

module.exports = router;
