//var dbConnection = require('../../config/dbConnection');

module.exports = function (app){

  //var connection = dbConnection();

  app.get('/produtos', function(req, res){

    var connection = app.config.dbConnection();

    connection.query(
      'SELECT * FROM produtos',
      function(error, result){
         res.render("produtos/produtos", {produtos: result});
      }
    );


  });
};
