module.exports = function(app){

  app.get('/cadastrar-cliente', function(req, res){
    res.render('admin/form_add_cliente');
  });
  app.post('/clientes/salvar', function(req,res){
    var cliente = req.body;

    var connection = app.config.dbConnection();
    var clientesModel = new app.app.models.ClientesDAO(connection);

    clientesModel.salvarCliente(cliente, function(error,result){
      res.redirect('clientes');
    });

  });
}
