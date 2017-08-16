var http = require('http');

var server = http.createServer(function(req, res){ // Permitir criar o server
  var categoria = req.url; // Cria uma requisição e informa que irá utilizar o localhost.
  if (categoria == "/tecnologia") {
    res.end("<html><body>Categoria de Tecnologia</body></html>"); // Permiti informa com html
  } else if (categoria == "/lol") {
    res.end("<html><body>Categoria League of Legends</body></html>"); // Permiti informa com html
  } else if (categoria == "/pop") {
    res.end("<html><body>Cantores POP</body></html>"); // Permiti informa com html
  }
  res.end("<html><body>Primeira Página com Node</body></html>"); // Permiti informa com html
});

server.listen(3000); // Informa a porta que o servidor vai ser iniciado
