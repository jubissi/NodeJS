var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

  var connection = dbConnection(); //executando a função dentro dele

  app.get('/produtos', function(req, res){

    connection.query(
      'SELECT * FROM produtos',
      function(error,result){
        //res.send(result);
        res.render("produtos/produtos",{produtos: result});
      }
    );

  });
}
