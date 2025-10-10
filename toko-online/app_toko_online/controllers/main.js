const { router } = require("../../app");
var products = require("../../data/product.json");
const { search } = require("../routes");

const index = (reg, res) => {
    res.render('index', {
        title: 'Toko Online Sederhana',
        products: products,
        query:''
    });
};


module.exports = { index };