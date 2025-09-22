// app.js
const express = require("express");
const app = express();
const port = 3000;

// Membuat Route ke halaman home dengan method GET
app.get("/", (req, res) => {
  res.send("Hello, GET request!");
});

// Membuat middleware untuk menerima request body dari json
app.use(express.json());
// Membuat Route ke halaman submit dengan method POST
app.post("/submit", (req, res) => {
  const { name } = req.body;
  res.send("Hello, ${name}!");
});

app.listen(port, () => {
  console.log("Server running at http://localhost:${port}/");
});
