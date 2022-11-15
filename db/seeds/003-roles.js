/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('roles').del()
    await knex('roles').insert([
        { id: '4c68d36c-5759-4979-ba0b-cd6608c67256', name: 'admin' },
        { id: 'f71913c0-caf0-4bf3-a32d-0097bff3f20e', name: 'user' },
    ])
}
