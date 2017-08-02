var http = require('http'); //require: palavra reservada para utilizar módulos. Módulo http do NodeJS
var server = http.createServer(function(req,res){ //os parâmetros no request e response são funções
  var categoria = req.url;
  if(categoria == "/tecnologia"){
    res.end("<html><body>Categoria de Tecnologia</body></html>");
  }else if(categoria == "/lol"){
    res.end("<html><body>Categoria League of Legends</body></html>");
  }else if(categoria == "/pop"){
    res.end("<html><body>Categoria Cantores Pop</body></html>");
  }
  res.end("<html><body>Página inicial</body></html>");
});

server.listen(3000); //roda o servidor na porta 3000: localhost:3000
