// Update with your config settings.
const { database } = require('./src/configs/config')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: database.db,
            user: database.user,
            password: database.user,
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        },
    },

    // staging: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // },

    // production: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // }
}
