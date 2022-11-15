/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('vehicleType').del()
    await knex('vehicleType').insert([
        { id: 'a5d6059c-5899-4d81-8e01-72cd58515044', name: 'car' },
        { id: 'e248c38b-bcdc-439f-a62d-071c592b034d', name: 'mini bus' },
        { id: '2a2823f0-ddc6-4c25-8f8c-791f7bdeea76', name: 'moto bike' },
        { id: 'a0acce4f-6149-4e21-83cf-fff17fafae03', name: 'bike' },
        { id: 'b4e19c49-4bad-449f-90f7-81496686758d', name: 'boat' },
    ])
}
