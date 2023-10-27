const express = require("express");
const app = express();
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/shoghiks", (req, res) => {
  res.render("shoghiks/home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
