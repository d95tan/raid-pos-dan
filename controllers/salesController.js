const Sale = require("../models/sale");

const index = async (req, res) => {
  res.json({ all: "sales" })
  // const data = req.body;
  // const user = await User.create(data);
  // res.json(user)
} 

const create = async (req, res) => {
  res.json({create: "sale"})
}

module.exports = {
  index,
  create
}
