import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Routes
app.use("/api/users", router); //userRouter
app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});
// Server started
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
