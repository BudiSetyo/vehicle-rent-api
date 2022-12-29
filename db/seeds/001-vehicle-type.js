/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('vehicleType').del()
    await knex('vehicleType').insert([
        { id: 'a5d6059c-5899-4d81-8e01-72cd58515044', name: 'car' },
        { id: '2a2823f0-ddc6-4c25-8f8c-791f7bdeea76', name: 'moto bike' },
        { id: 'a0acce4f-6149-4e21-83cf-fff17fafae03', name: 'bike' },
    ])
}
