var products = require("../../data/products.json");
var Product = require("../models/products");
const index = async (req, res) => {
    try{
        // unakan find 
        // untuk mengambil semua data produk dari database/collection
        const prod = await Product.find(); // untuk mengambil semua data produk dari database/collection
        res.render('index', {
            title: 'Toko Online Sederhana - ini dari MongoDB',
            products: prod,
        });
        } catch(err){
        res.status(500).send('Gagal memuat produk');
    }
};
const detail = async (req, res) => {
    try{
        //conts productid = parseint(reg.params.id); //Tangkap 10 dari URL    
        //const product = products.find(p => p.id == productid); //cari produk byid


        const productId = req.params.id;
        const
};

module.exports = { index, detail };