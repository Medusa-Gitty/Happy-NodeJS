const Comment = require("../models/commentModel");
const asyncHandler = require("express-async-handler");

exports.makeComment = asyncHandler(async (req, res) => {
  const comment = await Comment.create(req.body);
  res.status(200).send({ success: true, comment: comment });
});
