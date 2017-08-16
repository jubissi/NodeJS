var app = require('./config/server');

// Definindo rotas e já separado em modulos
// var rotaHome = require('./app/routes/home');
// rotaHome(app);
//
// // Rota de cadastro
// var rotaCadastrar = require('./app/routes/add');
// rotaCadastrar(app);
//
// // Rota de Produtos
// var rotaProdutos = require('./app/routes/produtos');
// rotaProdutos(app);
//
// // Rota de Clientes
// var rotaProdutos = require('./app/routes/clientes');
// rotaProdutos(app);

app.listen(3000, function(){
  console.log('Server ON');
});
