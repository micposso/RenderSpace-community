// app.js
import express from "express";
import Product from "./models/product.model.js";
import "dotenv/config";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.disable("x-powered-by");

app.get('/', (req, res) => {
  res.status(200).send(`Server is running now! ${ PORT }`);
});

//show products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// add products
app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// view all products
app.get('/api/products/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get individual product
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update API
app.put('/api/product/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if(!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // recheck from the database after is updated
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete API
app.delete('/api/product/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default app;
