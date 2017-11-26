const http = require('http')
const express = require('express');
const path = require('path');
const app = express();

var clientPath = path.join(__dirname, "../client");

app.use(express.static(clientPath));
  
app.listen(process.env.PORT || 5000);