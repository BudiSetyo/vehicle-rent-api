// Update with your config settings.
const { database } = require('./src/configs/config')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: database.host,
            database: database.db,
            user: database.user,
            password: database.password,
            port: database.port,
            charset: 'utf8',
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        },
    },
}
