const express = require("express");
const router = express.Router();

const salesController = require("../controllers/salesController.js")

router.get("/", salesController.index);
router.post("/", salesController.create);

module.exports = router