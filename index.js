const express = require("express");
const app = express();
const User = require("./models/user");
const port = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");

// use ejs-mate
app.engine("ejs", ejsMate);
//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//serving the images route?
app.use(express.static("public"));

// signing up
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/secret", (req, res) => {
  res.send("This is secret");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
