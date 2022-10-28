/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('vehicleStatus').del()
    await knex('vehicleStatus').insert([
        { name: 'available' },
        { name: 'not available' },
    ])
}
