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
import path from "path";

const PORT = process.env.PORT || 3000;

const app = express();

// Use morgan middleware for logging requests
app.use(morgan('dev'));  // 'combined' is a predefined format for detailed logs
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.disable("x-powered-by");

// Serve static HTML file
app.get("/home", (req, res) => {
  const __dirname = path.resolve();  // Get the directory name of the current module
  res.sendFile(path.join(__dirname, "public", "index.html"));  // Send index.html from the 'public' folder
});

app.get("/", (req, res) => {
  res.status(200).send(`Server is running now! ${PORT}`);
});

// product route
app.use("/", showAllProducts);
app.use("/", showProduct);
app.use("/", addProduct);
app.use("/", updateProduct);
app.use("/", removeProduct);

export default app;
