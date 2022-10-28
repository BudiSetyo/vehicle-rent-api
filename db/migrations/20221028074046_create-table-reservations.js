/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('reservations', (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
        table.uuid('userId')
        table.uuid('vehicleId')
        table.integer('quantity')
        table.integer('price')
        table.dateTime('startDate')
        table.dateTime('endDate')
        table.string('bookingCode')
        table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('reservations')
}
