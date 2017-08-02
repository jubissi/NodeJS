var express = require('express'); //incluindo o módulo express do NodeJS
var app = express(); //recebendo variável em forma de função

//necessário utilizar uma "linguagem" específica do express
app.get('/',function(req,res){ //página inicial e função como parâmetro
  res.send("<html><body>Página Inicial</body></html>");
});
app.get('/tecnologia',function(req,res){ //página inicial e função como parâmetro
  res.send("<html><body>Página de Tecnologia</body></html>");
});
app.get('/musica',function(req,res){ //página inicial e função como parâmetro
  res.send("<html><body>Página de Música</body></html>");
});

app.listen(3000,function(){
  console.log('Servidor ativo e rodando com Express.');
}); //o segundo parãmetro é uma função de callback (retorno)

//Express já retorna na página informações/erros
//Resolve problemas de rotas
