var express = require('express');
var consign = require('consign');
var app = express();
// var msg = require('./mod_teste'); // Informa que está na pasta raiz, foi utilizado o ./ por boas praticas

app.set('view engine','ejs'); // Defini nova propriedade - Foi alterado a Engine de View e agora está utilizando o EJS(Framework).
app.set('views', './app/views');

consign()
.include('app/routes') //especifica onde estao as rotina e
.then('config/dbConnection.js')
.into(app); //onde serao exportadas


module.exports = app;
