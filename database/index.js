const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      port:3307,
      password : '123456',
      database : 'wpa'
    }
  });

module.exports = knex;