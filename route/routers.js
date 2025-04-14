const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

router.post("/orders", ordersController.orders);
router.get("/orders", ordersController.ordersList);
router.get("/orders/:id", ordersController.UserOrders);

module.exports = router;
