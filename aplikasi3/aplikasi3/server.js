const express = require("express");
const app = express();
const port = 3000;

//membuat middlewer untuk menerima request body dari json
app.use(express.static("public"));

app.listen(port, () => {
  console.log("server running at http://localhost:${port}/");
});
