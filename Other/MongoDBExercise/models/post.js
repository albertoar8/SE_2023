const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
  userId: { type: String, trim: true, required: true },
  postTitle: { type: String, trim: true, required: true },
  postDescription: { type: String, trim: true, required: true },
  postImage: { type: String, trim: true, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", post);
