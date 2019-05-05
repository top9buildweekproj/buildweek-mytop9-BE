// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/topnine.sqlite3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'dd8ltnt8btedjv',
      user:     'htdulmzyyeyqzm',
      password: 'f1da2306ae454ef6a843ebc2269c833d3254b43b2fc0758a322a2dbc0513df3f'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
};
