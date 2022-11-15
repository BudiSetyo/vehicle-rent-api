/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('vehicleStatus').del()
    await knex('vehicleStatus').insert([
        { id: '5a917469-a471-4c12-b67b-814c3bc5ab34', name: 'available' },
        { id: '300a6217-e59a-4110-b35d-517555d0aa8d', name: 'not available' },
    ])
}
