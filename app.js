const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const CleanBlog = require("./models/CleanBlog");

//Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGİNE
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//MiddleWares
app.use(express.static("public"));

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.get("/", async (req, res) => {
  const posts = await CleanBlog.find({});
  res.render("index", {
    posts: posts,
  });
});

app.post("/blogs", async (req, res) => {
  await CleanBlog.create(req.body);
  res.redirect("/");
});

const port = 4000;

app.listen(port, (req, res) => {
  console.log(`Sunucu ${port}'unda başlatıldı`);
});
