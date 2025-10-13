var products = require("../data/products.json");
var Product = require("../models/products");

const index = async (req, res) => {
  try {
    const prod = await Product.find({});
    res.render("index", {
      title: "Toko Online Sederhana - Ini dari Mongo DB",
      products: prod,
      query: "",
    });
  } catch (err) {
    res.status(500).send("Gagal Memuat Produk");
  }
};

const detail = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send("Produk Tidak Ditemukan!");
    }
    res.render("product-detail", {
      title: product.name,
      product: product,
    });
  } catch (err) {
    res.status(404).send("Gagal Memuat Detail Produk");
  }
};

// Buat rest api
const all = async (req, res) => {
  try {
    const prod = await Product.find({});
    res.status(200).json({
      status: true,
      message: "Data Produk Berhasil Diambil",
      data: prod,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Gagal Memuat Produk",
    });
  }
};
// CRUD controller
// create = POST (/api/produk)

//create/insert Data
const create = async (req, res) => {
  try {
    // 1. Ambil data dari request body
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock || 0,
    });

    // 2. Simpan data ke MongoDB melalui model Product
    const product = await newProduct.save();

    // 3. Kirim respon sukses ke user
    res.status(200).json({
      status: true,
      message: "Produk berhasil disimpan",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// read one /detail product
const detailproduct = async (req, res) => {
};

// update data
const update = async (req, res) => {
    try{
        const product = await Produuct.findByIdAndDelete(req.params.id);
        });

        if(!product){ //kirim respon gagal
            res.status(404).json({
                status: false, message: "Product tidak ditemukan",
            });

         }else{
             //kirim respon sukses
             res.status.(200).json({
             status:true, message: "Produk berhasil dihapus"
        });
    }catch(err){
        if(err.name === 'castError'){
            res.status(400).json({
                status: false,message: "format ID tidak valid"
            });
        }else if(err.name === 'validationError'){
            res.status(400).json({
                status: false, message: err.message
            });
        }else{
            res.status(500).json({
                status: false, message: 'Interal server error'
            });
        }
    }
};

// delete/remove data
const remove = async (req, res) => {};

module.exports = { index, detail, all, create, detailproduct, update, remove };