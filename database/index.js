const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '66.45.245.146',
      user : 'voteonl1_1',
      port:3306,
      password : 'Shubhendu@12',
      database : 'wp_test'
    }
  });

module.exports = knex;