const mongoose = require("mongoose");

const commentModel = mongoose.Schema({
  postId: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentModel);

module.exports = Comment;
