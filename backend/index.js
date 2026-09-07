const express = require("express")
const { holdingModel } = require('./Model/HoldingModel')
const { positionModel } = require("./Model/PositionModel");
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

// app.get('/addholding' , async(req ,res ) => {
//     let  holdings = [
//         {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//       ];
//       holdings.forEach((item) => {
//         let newHolding = new  holdingModel ({

//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net:  item.net,
//             day: item.day, 
//         })
//         newHolding.save();
//       })
//       res.send('Done')
// })
//

// app.get('/addposition', async (req, res) => {
//     let position = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",

//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",

//         },
//     ];
//     position.forEach((item) => {
//         let newposition = new positionModel({

//             product: item.product,
//             name: item.name,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,


//         })
//         newposition.save();
//     })
//     res.send('Done')
// })


app.get('/allHolding' ,async(req,res) =>{
    let allHolding =await holdingModel.find({})
    res.json(allHolding)
})

app.get('/allPosition' ,async(req,res) =>{
    let allPosition =await positionModel.find({})
    res.json(allPosition)
})


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
  
      
      // BUY → HOLDING UPDATE
      
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
  
    
      // SELL → HOLDING UPDATE
    
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
  
        // qty 0 → holding delete
        if (holding.qty === 0) {
          await holdingModel.deleteOne({
            _id: holding._id,
          });
        } else {
          await holding.save();
        }
      }
  
      // =========================
      // SAVE ORDER
      // =========================
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
  
  
  // =========================
  // GET ALL ORDERS
  // =========================
  
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