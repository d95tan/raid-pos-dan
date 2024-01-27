const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Item", itemSchema);
