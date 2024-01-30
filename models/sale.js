const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const rowSchema = new Schema({
  itemId: {
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
  },
});

const saleSchema = new Schema(
  {
    items: {
      type: [rowSchema],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

saleSchema.virtual("total").get(function () {
  let total = 0;
  for (const item of this.items) {
    total += item.quantity * item.price;
  }
  return total;
});

module.exports = model("Sale", saleSchema);
