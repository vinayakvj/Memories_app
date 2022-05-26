import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  age: Number,
});

const modelSchema = mongoose.model("ModelSchema", schema);

/* module.exports = modelSchema; */

export default modelSchema;
