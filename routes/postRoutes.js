const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/post", (req, res, next) => {
  postController.makePost(req, res, next);
});
router.get("/post", (req, res, next) => {
  postController.getAllPosts(req, res, next);
});

module.exports = router;
