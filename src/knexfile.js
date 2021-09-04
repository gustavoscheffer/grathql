const properties = require('./config/config')

module.exports = {

  client: 'mysql',
  connection: {
    database: properties.db.database,
    host: properties.db.host,
    user: properties.db.user,
    password: properties.db.password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
