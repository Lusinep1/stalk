const express = require("express");
const app = express();
const User = require("./models/user");
const port = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");

main().catch((err) => console.log("mongoose error", err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/surfPass");
  console.log("Mongo connection open");
}

// use ejs-mate
app.engine("ejs", ejsMate);
//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//serving the images route?
app.use(express.static("public"));
//parse body
app.use(express.urlencoded({ extended: true }));

// signing up
app.get("/register", (req, res) => {
  res.render("register");
});

// post pass?
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.redirect("/");
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
