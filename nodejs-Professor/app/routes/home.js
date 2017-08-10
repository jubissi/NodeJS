module.exports = function(app){ //precisa receber a variavem do server
  app.get('/', function(req, res){
    res.render("home/index");
  });
}
