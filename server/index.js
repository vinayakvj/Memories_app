import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//importing database.
import modelSchema from "./models/dbModel.js";
/* 
import { router } from "./routes/posts.js";
 */
const app = express();

// model of database.

const schema = new mongoose.Schema({
  name: String,
  age: String,
});

const bgModel = mongoose.model("bgModel", schema);

/* app.use("/posts", router); */
app.use(cors());

const dbURL = "mongodb://localhost:27017/Test";

const data = [
  { name: "Vinayak", age: "21" },
  { name: "vinny", age: "21" },
];

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected.");
    app.listen(3000);
  })
  .catch((err) => {
    console.log("err.");
  });

app.get("/", (req, res) => {
  const dbb = new modelSchema({ name: "Vinny", age: "21" });

  dbb
    .save()
    .then((result) => {
      console.log("data entered.");
    })
    .catch((err) => {
      console.log("data not entered.");
      console.log(err);
    });
  res.send("hiiii");
});
