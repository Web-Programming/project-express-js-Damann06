// install paket mongoose dengan perintah npm install mongoose
const mongoose = require('mongoose');
const dbURI = "mongodb://localhost://27017/paw2_si5c";

// koneksi ke database
mongoose.connect(dbURI, {});

// cek koneksi
mongoose.connection.on('connected',() => {
    console.log('Mongoose connected to %{dbURI}');
});
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});