const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const holdingSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    qty: {
      type: Number,
      required: true,
    },

    avg: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    net: {
      type: String,
      required: true,
    },

    day: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
        
module.exports = { holdingSchema };