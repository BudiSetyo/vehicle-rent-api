/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('vehicleType').del()
    await knex('vehicleType').insert([
        { name: 'car' },
        { name: 'mini bus' },
        { name: 'moto bike' },
        { name: 'bike' },
        { name: 'boat' },
    ])
}
