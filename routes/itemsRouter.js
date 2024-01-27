const express = require("express");
const router = express.Router();

const itemsController = require("../controllers/itemsController.js")

router.get("/", itemsController.index);
// router.get("/:id", itemsController.getOne);
router.post("/", itemsController.create);

module.exports = router