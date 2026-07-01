const express = require("express");
const router = express.Router();

const authorizeRoles = require("../middleware/role.middleware");
const authMiddleware = require("../middleware/auth.middleware");

const {
  createShipment,
  getMyShipments,
  assignDriver,
  getAssignedShipments,
  updateShipmentStatus,
  trackShipment,
  getAllShipments
} = require("../controllers/shipment.controller");

router.put(
  "/:shipmentId/status",
  authMiddleware,
  authorizeRoles("driver"),
  updateShipmentStatus
);

router.put(
    "/:shipmentId/assign-driver",
    authMiddleware,
    authorizeRoles("admin"),
    assignDriver
);

router.get(
  "/assigned",
  authMiddleware,
  authorizeRoles("driver"),
  getAssignedShipments
);

router.get(
  "/track/:trackingId",
  authMiddleware,
  trackShipment
);

router.get(
  "/",
  authMiddleware,
  authorizeRoles("admin"),
  getAllShipments
);

router.post("/", authMiddleware, createShipment);
router.get("/my", authMiddleware, getMyShipments);
module.exports = router;