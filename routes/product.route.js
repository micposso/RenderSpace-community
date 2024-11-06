import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct
} from "../controllers/product.controller.js";

const productRoute = Router();

// get all products
const showAllProducts = productRoute.get("/api/products", getAllProducts);

// get individual product
const showProduct = productRoute.get("/api/products/:id", getProduct);

// add product
const addProduct = productRoute.post("/api/products", postProduct);

// update product
const updateProduct = productRoute.put("/api/products/:id", putProduct);

// delete product
const removeProduct = productRoute.delete("/api/products/:id", deleteProduct);

export {
  showAllProducts,
  showProduct,
  addProduct,
  updateProduct,
  removeProduct,
};


