/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('vehicles', (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
        table.string('name')
        table.uuid('typeId')
        table.uuid('locationId')
        table.text('description')
        table.integer('price')
        table.uuid('statusId')
        table.string('picture')
        table.integer('stock')
        table.integer('like')
        table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('vehicles')
}
