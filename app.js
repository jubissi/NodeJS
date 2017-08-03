var express = require('express'); //incluindo o módulo express do NodeJS
var app = express(); //recebendo variável em forma de função

app.set('view engine','ejs');

//necessário utilizar uma "linguagem" específica do express
app.get('/',function(req,res){
  res.render("home/home");
});
app.get('/cadastrar',function(req,res){
  res.render("admin/form_add_produto");
});
app.get('/produtos',function(req,res){
  res.render("produtos/produtos");
});
// app.get('/',function(req,res){ //página inicial e função como parâmetro
//   res.send("<html><body>Página Inicial</body></html>");
// });
// app.get('/tecnologia',function(req,res){ //página inicial e função como parâmetro
//   res.send("<html><body>Página de Tecnologia</body></html>");
// });
// app.get('/musica',function(req,res){ //página inicial e função como parâmetro
//   res.send("<html><body>Página de Música</body></html>");
// });
// app.get('/tabuada',function(req,res){
//   var mensagem = '<center><h2>Tabuadas</h2>';
//   for(var a=1;a<11;a++){
//     mensagem += '<hr> Tabuada do' + a + '<br>';
//     for(var b=1;a<11;b++){
//       var saida = a + 'x' + b + '=' + (a*b) + '<br>';
//       mensagem += saida;
//     }
//   }
//   mensagem += '<hr';
//   mensagem += '</center>';
//
//   res.send(mensagem); //send é função do Express
// });

app.listen(3000,function(){
  console.log('Servidor ativo e rodando com Express.');
}); //o segundo parãmetro é uma função de callback (retorno)

//Express já retorna na página informações/erros
//Resolve problemas de rotas
