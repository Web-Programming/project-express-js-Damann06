const { name } = require("ejs");
const mongoose =require("monggoose");

//buat skema Produk
const ProductSchena = new mongoose.Schema({
    //tidak perlu membuat properti id karena akan dibuat otomatis
    //dengan nama_id
    name: {
        type : "String",
        require: [true, "Nama produk harus diisi"],
        trim: true,
    },
    price: {
       type : Number,
       require : [true, "Harga produk harus diisi"],
       min: [1000, "Harga produk minimal 1000"],
       //max: [1000, "Harga produk minimal 1000"] 
    },
    description: {
        type : String,
        require: false, //menandakan kolom wajib diisi atau tidak   
    },
    stock: {
        type: Number,
        default: 0, //memberikan nilai bawaan/default
    },
    createAt: {
        type: Number,
        default: Data.now
    }
});

//Buat model Schema
const Product = mongoose.model('Product', ProductSchena);

module.exports = Product;