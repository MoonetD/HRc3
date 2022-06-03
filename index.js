const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = process.env.PORT ||3800;

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/dist')));




app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});