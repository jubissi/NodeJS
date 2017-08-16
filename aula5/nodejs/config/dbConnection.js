var mysql = require('mysql');

var conecMySQL = function() {
  console.log('Conexão estabelecida.')
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'fiap',
      database: 'sistema_produtos'
    });
}

module.exports = function() {
  console.log('O Autoload carregou o módulo de conexão')
  return conecMySQL;
  // console.log('Conexão estabelecida.')
  //   return mysql.createConnection({
  //     host: 'localhost',
  //     user: 'root',
  //     password: 'fiap',
  //     database: 'sistema_produtos'
  //   });
}
