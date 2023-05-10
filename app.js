const express = require("express");
const ejs = require("ejs");
const app = express();

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//MiddleWares
app.use(express.static('public'));

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.get("/", (req, res) => {
  res.render("index");
});

const port = 4000;

app.listen(port, (req, res) => {
  console.log(`Sunucu ${port}'unda başlatıldı`);
});
