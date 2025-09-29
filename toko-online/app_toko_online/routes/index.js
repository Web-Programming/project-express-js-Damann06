var express = require("express");
var router = express.Router();
var mainController = require('../controllers/main');
var product = require("../data/product");

router.get('/', mainController.index);
/* GET home page. */
// router.get('/, funcition(reg, res, next) {
//  res.render('index', {
//  title: 'Toko Online Sederhana',
//  products: products});
//  });

// router.get("/search", funcition(reg, res, next){
// });
router.get('/', mainController.index);
module.exports =router;

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Toko Online Sederhana",
    product: product,
    query: "", //biar bisa dipakai di view
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