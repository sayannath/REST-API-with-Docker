const Product = require("../models/product");

exports.getProductById = (req, res, id, next) => {
  Product.findById(id).exec((err, product) => {
    if (err) {
      return res.status(400).json({
        error: "Product not found",
      });
    }
    req.product = product;
    next();
  });
};

//Create a plan
exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Not able to save Product is DB",
        });
      }
      res.json(product);
    });
  };

exports.getAllProducts = (req, res) => {
    Product.find().exec((err, product) => {
    if (err) {
      res.status(400).json({
        error: "No Product is found",
      });
    }
    return res.json(product);
  });
};
