import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import userRoutes from "./routes/user";

mongoose.set('strictQuery', false);
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({
  limit: '30mb',
}));
app.use(express.urlencoded({
  limit: '30mb',
  extended: true
}));
app.use('/', userRoutes);

const CONNECTION_URL = 'mongodb+srv://okoyecharles:A1b2c3d4e5.@cluster0.ymqic93.mongodb.net/test';
const port = 4000;

mongoose.connect(CONNECTION_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at ${port}`)
    })
  })
  .catch((err) => {
    console.log(err.message);
  });