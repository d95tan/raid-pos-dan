const Item = require("../models/item");

const index = async (req, res) => {
  const items = await Item.find({});
  res.json(items)
} 

const create = async (req, res) => {
  const data = req.body;
  const item = await Item.create(data);
  res.json(item)
} 

module.exports = {
  index,
  create
}
