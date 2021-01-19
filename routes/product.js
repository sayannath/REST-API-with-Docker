const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getAllProducts,
} = require("../controllers/product");

//All Params
router.param("productId", getProductById);

//All Routes
router.post("/product/create", createProduct);
router.get("/products", getAllProducts);

module.exports = router;
