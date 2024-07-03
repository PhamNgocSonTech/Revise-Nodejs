const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
// HTTP Logger
// app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

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
  console.log(req.query.valueSearch);
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  res.send(req.body);
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
