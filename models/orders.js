const { DataTypes } = require("sequelize");
const dbConnection = require("../config/DB_connection");
const Order = dbConnection.define(
  "orders",
  {
    orderType: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "orders",
  }
);

module.exports = Order;
