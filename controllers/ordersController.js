const Order = require("../models/orders");

// create order controller
exports.orders = async (req, res) => {
  // destructure the request body
  const { orderType, quantity, productId, userId, amount } = req.body;
  console.log(req.body);

  try {
    // check if all fields are empty
    if (!orderType || !quantity || !productId || !userId || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const createOrder = await Order.create({
      orderType,
      quantity,
      productId,
      userId,
      amount,
    });

    if (createOrder) {
      return res
        .status(200)
        .json({ message: "Order created successfully", createOrder });
    } else {
      return res.status(400).json({ message: "Order creation failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

//get all orders
exports.ordersList = async (req, res) => {
  try {
    //get all orders fro the database
    const allOrders = await Order.findAll();

    //check if the orders table or entities is empty
    if (allOrders.length == 0) {
      return res
        .status(404)
        .json({ message: "No orders found or order list is empty" });
    }

    res.status(200).json({
      message: "Orders gotton successfully",
      allOrders,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

//get users orxer by Id
exports.UserOrders = async (req, res) => {
  const { id } = req.params;
  try {
    //check if user order exists
    const userOrder = await Order.findOne({ where: { id: id } });

    if (!userOrder) {
      return res.status(404).json({ message: "User order not found" });
    }

    res.status(200).json({
      message: "User order gotton successfully",
      userOrder,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};
