const Sale = require("../models/sale");
const Item = require("../models/item");

const index = async (req, res) => {
  try {
    const data = await Sale.find({}).populate("items.itemId");
    data.sort((a, b) => {
      const dateA = a.createdAt;
      const dateB = b.createdAt;
      if (dateA < dateB) {
        return 1;
      } else {
        return -1;
      }
    });
    res.status(201).json(data);
  } catch (e) {
    res.status(500).json({ msg: "server error" });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    const response = await Sale.create(data);
    for (const item of data.items) {
      let saleItem = await Item.findById(item.itemId);
      saleItem.inventory -= item.quantity;
      await saleItem.save();
    }
    res.status(201).json(response);
  } catch (e) {
    res.status(500).json({ msg: "server error" });
  }
};

module.exports = {
  index,
  create,
};
