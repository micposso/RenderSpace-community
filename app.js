// app.js
import express from "express";
import Product from "./models/product.model.js";
import "dotenv/config";
import morgan from "morgan";  // Import morgan for logging requests
import {
  showAllProducts,
  showProduct,
  addProduct,
  updateProduct,
  removeProduct
} from "./routes/product.route.js";

const PORT = process.env.PORT || 3000;

const app = express();

// Use morgan middleware for logging requests
app.use(morgan('dev'));  // 'combined' is a predefined format for detailed logs
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.status(200).send(`Server is running now! ${PORT}`);
});

// show all products
app.use("/", showAllProducts);

// show individual product
app.use("/", showProduct);

// add product
app.use("/", addProduct);

// update product
app.use("/", updateProduct);

// Delete API
app.use("/", removeProduct);

export default app;
