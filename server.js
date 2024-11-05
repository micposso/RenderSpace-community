// server.js
import app from "./app.js";
import "dotenv/config";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;


const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    app.listen(PORT, () => {
      console.log(`Connected to DB and Server is running now! ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
run();
