const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

exports.makePost = asyncHandler(async (req, res) => {
  const post = await Post.create(req.body);
  res.status(200).send({ success: true, post: post });
});

exports.getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();

  res.status(200).send({ success: true, posts: posts });
});
