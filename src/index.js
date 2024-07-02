const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
// HTTP Logger
// app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query.q);
  res.render("search");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
