import mongoose, { mongo } from "mongoose";

const schema = mongoose.Schema({
  title: String,
  message: String,
  creater: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postMessage = mongoose.Model("PostMessage", "schema");

export default postMessage;
