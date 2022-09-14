const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
app.use(express.json());
dotenv.config();

app.use(postRoutes);
app.use(commentRoutes);

//------------------------------
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to DB established");
  });

//Server Started
app.listen(8080, function () {
  console.log("Started application on port 8080");
});
