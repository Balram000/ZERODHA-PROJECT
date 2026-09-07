const express = require("express")
const { holdingModel } = require('./Model/HoldingModel')
const { positionModel } = require("./Model/PositionModel");
const { appModel } = require("./Model/Appmodel.js");
require('dotenv').config();
const mongoose = require('mongoose');
const { PositionSchema } = require("./Schema/PositionSchema");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGODB_URL;
const bodyparser =require('body-parser')
const cors =require("cors")
const { OrderModel } = require("./Model/Ordermodel");
 
const app = express();
 
app.use(cors())
app.use(bodyparser.json());
 
app.get("/addposition", async (req, res) => {
  try {
    const position = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
      },
    ];
 
    await positionModel.insertMany(position);
 
    res.send("Positions added successfully");
  } catch (error) {
    console.log("Position error:", error);
    res.status(500).send("Failed to add positions");
  }
});
 
 
app.get('/allHolding' ,async(req,res) =>{
    let allHolding =await holdingModel.find({})
    res.json(allHolding)
})
 
app.get('/allPosition' ,async(req,res) =>{
    let allPosition =await positionModel.find({})
    res.json(allPosition)
})
 
// =========================
// APPS — seed + fetch
// =========================
app.get("/addapps", async (req, res) => {
  try {
    const apps = [
      { name: "Console", tagline: "Your account, one dashboard", description: "Track holdings, funds, reports and account settings in a single backoffice view.", accent: "#5B6B79", tint: "#EEF1F3", initial: "C", order: 1 },
      { name: "Coin", tagline: "Direct mutual funds", description: "Invest in direct mutual funds at zero commission and build long-term wealth.", accent: "#2E8B57", tint: "#EAF5EF", initial: "Co", order: 2 },
      { name: "Kite", tagline: "Trading, simplified", description: "Fast, clean trading terminal for equity, F&O, currency and commodity markets.", accent: "#387ED1", tint: "#EAF2FB", initial: "K", order: 3 },
      { name: "Varsity", tagline: "Learn the markets", description: "Free structured modules that take you from the basics to advanced trading.", accent: "#D97B29", tint: "#FBF1E7", initial: "V", order: 4 },
      { name: "TradingView", tagline: "Advanced charting", description: "Professional-grade charts and technical analysis tools built into Kite.", accent: "#131722", tint: "#ECEDEF", initial: "T", order: 5 },
    ];
 
    await appModel.insertMany(apps);
    res.send("Apps added successfully");
  } catch (error) {
    console.log("App seed error:", error);
    res.status(500).send("Failed to add apps");
  }
});
 
app.get("/allApps", async (req, res) => {
  try {
    let allApps = await appModel.find({}).sort({ order: 1 });
    res.json(allApps);
  } catch (error) {
    console.log("Fetch apps error:", error);
    res.status(500).json({ message: "Failed to fetch apps" });
  }
});
 
 
app.post("/orders", async (req, res) => {
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
  
  
  app.get("/orders", async (req, res) => {
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
 
app.listen(PORT, () => {
    console.log('app started ')
    mongoose.connect(url)
    console.log(' db conected')
})