
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware.js");

const {
    signupValidation,
    loginValidation,
    validate,
  } = require("../middleware/validateAuth.js");

  const { UserModel } = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



  router.post( "/api/auth/register",
    signupValidation,
    validate,
    async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({
          message: "Name, email and password are required",
        });
      }
  
      if (password.length < 6) {
        return res.status(400).json({
          message: "Password must be at least 6 characters",
        });
      }
  
      const existingUser = await UserModel.findOne({
        email: email.toLowerCase(),
      });
  
      if (existingUser) {
        return res.status(409).json({
          message: "User already exists",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await UserModel.create({
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
      });
  
      res.status(201).json({
        message: "Registration successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.log("Register error:", error);
  
      res.status(500).json({
        message: "Registration failed",
      });
    }
  });

  router.post("/api/auth/login",
    loginValidation,
    validate,
    async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }
  
      const user = await UserModel.findOne({
        email: email.toLowerCase(),
      });
  
      if (!user) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }
  
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
      );
  
      if (!isPasswordCorrect) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }
  
      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
  
      res.json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.log("Login error:", error);
  
      res.status(500).json({
        message: "Login failed",
      });
    }
  });


  router.get("/api/auth/me", authMiddleware, async (req, res) => {
    try {
      const user = await UserModel.findById(req.user.userId).select("-password");
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  });

  module.exports = router;