var express = require('express');
var app = express();

// A engine de view agora mudou, será o EJS
app.set('view engine', 'ejs');
app.set('views','./app/views');

module.exports = app;
