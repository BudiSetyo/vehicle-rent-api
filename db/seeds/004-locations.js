/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('location').del()
    await knex('location').insert([
        { id: '274eca9d-c0b4-4898-8bd6-021843898baf', name: 'Jakarta' },
        { id: 'f938d70e-e197-4539-bc16-92fd0f434943', name: 'Jawa Barat' },
        { id: '9e6d3198-45ca-4aa1-abdc-bacd300a764b', name: 'Banten' },
        { id: '2613d0b8-333c-41d0-ab1c-c89df7007fb7', name: 'Yogyakarta' },
        { id: 'ee36004c-d142-47b0-98ca-b55be5bc1a26', name: 'Jawa Tengah' },
        { id: 'f458b5fe-29bf-4b9b-9639-2bc32753d94e', name: 'Jawa Timur' },
        { id: '21c97f66-2c86-40fb-a2bc-afa0d10a13be', name: 'Bali' },
        {
            id: '51d087ac-05b5-45a1-afb2-421547b61a4b',
            name: 'Nusa Tenggara Barat',
        },
        { id: '7414e8ab-b437-4901-b8c4-9d6fdfe63460', name: 'Lampung' },
        { id: '9bf068e4-d29e-4839-829a-7ce1d13ee749', name: 'Riau' },
        { id: '7a7f99f6-14a7-4582-ae13-5d93c3046bf2', name: 'Sumatera Utara' },
        {
            id: '9f937603-aa35-4fb2-ab51-4eacf0450e2e',
            name: 'Sulawesi Selatan',
        },
        { id: '341f111c-1c3c-449b-9ad5-05973f663f26', name: 'Sulawesi Utara' },
        { id: 'c132b369-6435-4649-b283-d583bdd47070', name: 'Sumatera Barat' },
        {
            id: '5cc33390-b5c6-4de2-9a18-f3dcb0bc029e',
            name: 'Nusa Tenggara Timur',
        },
        {
            id: '74f58146-4e81-45ae-ac47-afcdf4a64605',
            name: 'Kalimantan Selatan',
        },
        { id: '7419c333-1d04-4e2a-87b3-e65acc8a7d91', name: 'Gorontalo' },
        { id: 'd8456741-693d-4306-9d4c-d7bd273f0cd0', name: 'Bengkulu' },
        {
            id: '2a125def-cdf5-45e0-89e7-f8b58edafb04',
            name: 'Sumatera Selatan',
        },
        { id: '8cdf1dd4-898d-415b-9f91-26002a3666df', name: 'Aceh' },
        { id: 'c0f1a023-9b55-4ba9-b4ba-4df0c198d6ee', name: 'Bangka Belitung' },
        { id: '8c59e757-f99d-4c11-a29e-d7eabca4d823', name: 'Sulawesi Barat' },
        { id: '44727be9-679f-434e-9192-783891734180', name: 'Riau' },
        { id: '318f825e-76f3-45f2-89e8-7342029a383a', name: 'Jambi' },
        {
            id: 'a49ed979-81a3-4be0-9b7b-c2a7d420a859',
            name: 'Sulawesi Tenggara',
        },
        { id: '0850e756-88f9-4c63-9af1-1414bb2fa956', name: 'Sulawesi Tengah' },
        { id: '7f9e3283-7988-4a4b-96d0-1635c00913d4', name: 'Maluku Utara' },
        { id: '2d9dc3f9-d3b2-4aeb-8743-89598207c0d6', name: 'Maluku' },
        {
            id: '48a4a679-c0e1-4c06-8a3a-7d7a3c14efdd',
            name: 'Kalimantan Barat',
        },
        {
            id: 'f38a6d4f-c3ce-4a76-9da3-fa747a05d482',
            name: 'Kalimantan Timur',
        },
        {
            id: '3a0d74ef-32d9-4391-baad-48dad3ac3b14',
            name: 'Kalimantan Tengah',
        },
        { id: '4a726e95-d34c-4a9f-b147-e33a7c4b641e', name: 'Papua' },
        { id: 'c951c79d-a7c5-47f4-9288-9b31fc303388', name: 'Papua Barat' },
        {
            id: '12aeb8d7-1fb5-4235-bbf5-1b0167a9cb45',
            name: 'Kalimantan Utara',
        },
    ])
}
