const express = require("express");
const router = express.Router();
const { OrderModel } = require("../Model/Ordermodel");
const { holdingModel } = require('../Model/HoldingModel')
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, price, quantity, mode } = req.body;

    if (!name || !price || !quantity || !mode) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!["BUY", "SELL"].includes(mode)) {
      return res.status(400).json({
        message: "Mode must be BUY or SELL",
      });
    }

    const qty = Number(quantity);
    const orderPrice = Number(price);

    if (qty <= 0 || orderPrice <= 0) {
      return res.status(400).json({
        message: "Quantity and price must be greater than 0",
      });
    }

    if (mode === "BUY") {
      const holding = await holdingModel.findOne({ name });

      if (holding) {
        const oldQty = Number(holding.qty);
        const oldAvg = Number(holding.avg);

        const newQty = oldQty + qty;

        const newAvg =
          (oldAvg * oldQty + orderPrice * qty) / newQty;

        holding.qty = newQty;
        holding.avg = newAvg;
        holding.price = orderPrice;

        await holding.save();
      } else {
        await holdingModel.create({
          name: name,
          qty: qty,
          avg: orderPrice,
          price: orderPrice,
          net: "0.00%",
          day: "0.00%",
        });
      }
    }

    if (mode === "SELL") {
      const holding = await holdingModel.findOne({ name });

      if (!holding) {
        return res.status(400).json({
          message: `No holding found for ${name}`,
        });
      }

      if (Number(holding.qty) < qty) {
        return res.status(400).json({
          message: `Not enough quantity. Available: ${holding.qty}`,
        });
      }

      holding.qty = Number(holding.qty) - qty;
      holding.price = orderPrice;

      if (holding.qty === 0) {
        await holdingModel.deleteOne({
          _id: holding._id,
        });
      } else {
        await holding.save();
      }
    }

    const newOrder = new OrderModel({
      name: name,
      price: orderPrice,
      quantity: qty,
      mode: mode,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: savedOrder,
    });

  } catch (error) {
    console.log("Order error:", error);

    res.status(500).json({
      message: "Failed to place order",
    });
  }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
      const orders = await OrderModel.find({});
  
      res.json(orders);
    } catch (error) {
      console.log("Fetch orders error:", error);
  
      res.status(500).json({
        message: "Failed to fetch orders",
      });
    }
  });
  module.exports = router;