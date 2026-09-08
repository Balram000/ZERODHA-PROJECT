const { Schema } = require("mongoose");

const OrderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
   {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    mode: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },

    status: {
      type: String,
      default: "COMPLETED",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { OrderSchema };