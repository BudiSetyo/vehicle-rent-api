exports.up = async function (knex) {
    return knex.schema.createTable('admin', (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
        table.string('email').notNullable().unique().comment('Email is unique')
        table.string('password').notNullable()
        table.string('name').notNullable()
        table.enu('gender', ['male', 'female'])
        table.string('address')
        table.string('phoneNumber')
        table.uuid('locationId')
        table.string('profileImage')
        table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('admin')
}
