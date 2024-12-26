const express = require("express");
const productsController = require("../controllers/products.controller.js");
const productsRouter = express.Router();

productsRouter.post("/", productsController.createProduct);

module.exports = { productsRouter };
