var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require(".app/_toko_online/models/db");

//perbaikan 2
var indexRouter = require("./app_toko_online/routes/index.js");
var usersRouter = require("./app_toko_online/routes/product.js");
var productRouter = require("./app_toko_online/routes/users.js");//letaki
var engine = require("ejs-blocks"); //menggunakan ejs block
var app = express();
var productRouter = require("./routes/product");
app.use("/product", productRouter);

// view engine setup
app.set("views", path.join(__dirname, 'app_toko_online',"views")); //perbaikan 1
app.engine("ejs", engine);
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// serving bootstrap
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;