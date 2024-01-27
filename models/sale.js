const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const rowSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    }
  }
)

const saleSchema = new Schema(
  {
    items: {
      type: [rowSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Sale", saleSchema);
