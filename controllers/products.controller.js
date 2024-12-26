const ProductModel = require("../models/products.model.js");

async function createProduct(req, res, next) {
  try {
    res.status(201).json(createProduct);
  } catch (err) {
    next(err);
  }
}

module.exports = { createProduct };
