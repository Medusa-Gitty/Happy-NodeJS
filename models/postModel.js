const mongoose = require("mongoose");

const postModel = mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postModel);

module.exports = Post;
