// var express = require("express");
// var router = express.Router();
// //var proucts = require{"../../data/products.json"};
// var Product = require("../../data/product.json");

// router.get("/:id", function (req, res, next) {
//   const productId = parseInt(req.params.id); // tangkap ID dari URL
//   const product = product.find((p) => p.id === productId); // cari produk berdasarkan ID

//   if (!product) {
//     // jika produk tidak ditemukan
//     return res.status(404).send("Produk tidak ditemukan");
//   }

//   res.render("produk-detail", {
//     title: "product.name",
//     product: product,
//   });
// });
// module.exports = router;

// router.get("/all", async function(reg,res,next){
//   try {
//     const prod = await products.find({}); //untuk mengambil seluruh data dari callection
//     res.render('index', {
//       title: 'Toko Online Sederhana',
//       products: prod
//     });
// }catch(err){
//    res,status(500).send('Gagal memuat produk');
//   }
// });
// module.exports = router;\

var express = require("express");
var router = express.Router();
var productController = require("../controllers/product");

router.get("/all", productController.index);
router.get("/:id", productController.detail);

module.exports = router;