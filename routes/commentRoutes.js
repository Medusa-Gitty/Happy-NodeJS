const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.put("/comment", (req, res, next) => {
  commentController.makeComment(req, res, next);
});

module.exports = router;
