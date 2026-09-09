
const express = require("express");
const router = express.Router();

const { OrderModel } = require("../Model/Ordermodel");
const { holdingModel } = require("../Model/HoldingModel");
const authMiddleware = require("../middleware/authMiddleware");

// BUY / SELL ORDER
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, price, qty, mode } = req.body;
    console.log("REQ BODY:", req.body);
console.log("REQ USER:", req.user);

    if (!name || !price || !qty || !mode) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!["BUY", "SELL"].includes(mode)) {
      return res.status(400).json({
        message: "Mode must be BUY or SELL",
      });
    }

    const qtys = Number(qty);
    const orderPrice = Number(price);
    const userId = req.user.userId;

    if (qtys <= 0 || orderPrice <= 0) {
      return res.status(400).json({
        message: "Quantity and price must be greater than 0",
      });
    }

    // BUY 
    if (mode === "BUY") {
      const holding = await holdingModel.findOne({
        userId,
        name,
      });
    
      if (holding) {
        const oldQty = Number(holding.qty);
        const oldAvg = Number(holding.avg);
    
        const newQty = oldQty + qtys;
    
        const newAvg =
          (oldAvg * oldQty + orderPrice * qtys) / newQty;
    
        holding.qty = newQty;
        holding.avg = newAvg;
        holding.price = orderPrice;
    
        await holding.save();
    
        console.log("HOLDING UPDATED:", holding);
      } else {
        const newHolding = await holdingModel.create({
          userId,
          name,
          qty: qtys,
          avg: orderPrice,
          price: orderPrice,
          net: "0.00%",
          day: "0.00%",
        });
    
        console.log("HOLDING CREATED:", newHolding);
      }
    }

    // SELL 
    if (mode === "SELL") {
      const holding = await holdingModel.findOne({
        userId,
        name,
      });
    
      if (!holding) {
        return res.status(400).json({
          message: `No holding found for ${name}`,
        });
      }
    
      if (Number(holding.qty) < qtys) {
        return res.status(400).json({
          message: `Not enough quantity. Available: ${holding.qty}`,
        });
      }
    
      holding.qty = Number(holding.qty) - qtys;
      holding.price = orderPrice;
    
      if (holding.qty === 0) {
        await holdingModel.deleteOne({
          _id: holding._id,
        });
    
        console.log("HOLDING DELETED:", name);
      } else {
        await holding.save();
    
        console.log("HOLDING AFTER SELL:", holding);
      }
    }

    //  SAVE ORDER 
    const newOrder = new OrderModel({
      userId,
      name,
      price: orderPrice,
      qty: qtys,
      mode,
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

//  ALL ORDERS 
// Without login
router.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrderModel.find({});

    res.status(200).json(orders);
  } catch (error) {
    console.log("Fetch all orders error:", error);

    res.status(500).json({
      message: "Failed to fetch all orders",
    });
  }
});

// ================= USER ORDERS =================
// Login required
router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await OrderModel.find({
      userId: req.user.userId,
    });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log("Fetch user orders error:", error);

    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
});

module.exports = router;

