const express = require('express');
const app = express();
const port = 3000;

//Serving static file di folder public
app.use(express.static('public'));

app.listen(port, (req,res) => {
    console.log('server running at http://localhost:${port}');
});