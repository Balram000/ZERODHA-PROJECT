const express = require("express")

require('dotenv').config();
const mongoose = require('mongoose');

const bodyparser = require('body-parser')
const cors = require("cors")
const authRoute = require("./Route/AuthRoute.js");

 const Postion = require("./Route/Positions.js");
 const appsRoute = require("./Route/Appsroutes.js");
 const orderRoute = require("./Route/Orders.js");
const app = express();
  const holding = require("./Route/Holdings.js");

  app.use(
    cors({
      origin: [
        process.env.FRONTEND_URL,
        process.env.DASHBOARD_URL,
      ],
    })
  );

app.use(bodyparser.json());

 
 app.use("/api/auth", authRoute);

app.use("/api/", holding);
// positions
app.use("/api/", Postion);

// APPS — seed + fetch

app.use("/api/apps", appsRoute);

//orders
 
 app.use("/api/orders", orderRoute);

 app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Zerodha Backend is running in Docker"
  });
});

 mongoose
 .connect(process.env.MONGODB_URL)
 .then(() => {
   console.log("MongoDB connected");

   app.listen(process.env.PORT || 3002, () => {
     console.log("Server started");
   });
 })
 .catch((error) => {
   console.error("MongoDB connection failed:", error);
 });