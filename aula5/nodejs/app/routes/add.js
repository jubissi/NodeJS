module.exports = function (app){
  app.get('/add', function(req, res){
    res.render("admin/from_add_produto");
  });
};
