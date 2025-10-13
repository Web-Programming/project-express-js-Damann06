var express = require("express");
var router = express.Router();
var product= require("../data/product.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Toko Online Sederhana",
    product: product,
    query: null, //biar bisa dipakai di view
  });
});

/* GET search page. */
router.get("/search", function (req, res, next) {
  const q = req.query.q ? req.query.q.toLowerCase() : "";

  let filteredproduct;
  if (!q) {
    filteredproduct = product; // jika query kosong tampilkan semua
  } else {
    filteredproduct = product.filter((p) => p.name.toLowerCase().includes(q));
  }

  res.render("index", {
    title: "Hasil Pencarian",
    product: filteredproduct,
    query: q,
  });
});

module.exports = router;