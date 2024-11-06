const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  addProduct,
  deleteproduct,
  updatedProduct,
} = require("../controllers/product.controller.js");

const Product = require("../models/product.model.js");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteproduct);

module.exports = router;
