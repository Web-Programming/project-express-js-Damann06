const { router } = require("../../app");
var products = require("../../data/product.json");

const index = (reg, res) => {
    res.render('index', {
        title: 'Toko Online Sederhana',
        products: products,
        query:''
    });
};



module.exports = { index };