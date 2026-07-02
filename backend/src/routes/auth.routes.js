const express = require("express");
const router = express.Router();

const {
  registerUser,
  login,
  getProfile,
  getDrivers,
  createDriver,
} = require("../controllers/auth.controller");

const authorizeRoles = require("../middleware/role.middleware");
const authMiddleware = require("../middleware/auth.middleware");

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", login);

// PROFILE
router.get("/profile", authMiddleware, getProfile);
//create driver
router.post(
  "/create-driver",
  authMiddleware,
  authorizeRoles("admin"),
  createDriver
);
// GET ALL DRIVERS (Admin Only)
router.get(
  "/drivers",
  authMiddleware,
  authorizeRoles("admin"),
  getDrivers
);

// ADMIN TEST
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