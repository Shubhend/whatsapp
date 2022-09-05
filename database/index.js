const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'sql6.freemysqlhosting.net',
      user : 'sql6517395',
      port:3306,
      password : 'ZLcw4QZQvx',
      database : 'sql6517395'
    }
  });

module.exports = knex;