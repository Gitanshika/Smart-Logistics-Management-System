const express = require("express");
const router = express.Router();

const {
  registerUser,
  login,
  getProfile,
} = require("../controllers/auth.controller");
const authorizeRoles = require("../middleware/role.middleware");

const authMiddleware = require("../middleware/auth.middleware");

// REGISTER ROUTE
router.post("/register", registerUser);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);
router.get(
  "/admin-test",
  authMiddleware,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin",
    });
  }
);
module.exports = router;