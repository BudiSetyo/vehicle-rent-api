/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('location').del()
    await knex('location').insert([
        { name: 'Jakarta' },
        { name: 'Jawa Barat' },
        { name: 'Banten' },
        { name: 'Yogyakarta' },
        { name: 'Jawa Tengah' },
        { name: 'Jawa Timur' },
        { name: 'Bali' },
        { name: 'Nusa Tenggara Barat' },
        { name: 'Lampung' },
        { name: 'Riau' },
        { name: 'Sumatera Utara' },
        { name: 'Sulawesi Selatan' },
        { name: 'Sulawesi Utara' },
        { name: 'Sumatera Barat' },
        { name: 'Nusa Tenggara Timur' },
        { name: 'Kalimantan Selatan' },
        { name: 'Gorontalo' },
        { name: 'Bengkulu' },
        { name: 'Sumatera Selatan' },
        { name: 'Aceh' },
        { name: 'Bangka Belitung' },
        { name: 'Sulawesi Barat' },
        { name: 'Riau' },
        { name: 'Jambi' },
        { name: 'Sulawesi Tenggara' },
        { name: 'Sulawesi Tengah' },
        { name: 'Maluku Utara' },
        { name: 'Maluku' },
        { name: 'Kalimantan Barat' },
        { name: 'Kalimantan Timur' },
        { name: 'Kalimantan Tengah' },
        { name: 'Papua' },
        { name: 'Papua Barat' },
        { name: 'Kalimantan Utara' },
    ])
}
