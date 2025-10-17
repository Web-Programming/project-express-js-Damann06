const mongoose = require("mongoose");

// buat schema user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requiried: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email Harus Diisi"],
    unique: true,
    match: [/.+\@.+\..+/, "Email Tidak Valid"],
  },
  password: {
    type: String,
    required: [true, "Kata Sandi Harus Diisi."],
    minlength: [6, "Kata sandi minimal 6 karakter."],
    select: false, // penting jangan sertakan password saat mengambil data user
  },
  address: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

modeule.exports = mongoose.model("User", userSchema);