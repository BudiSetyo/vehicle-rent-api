const { Model } = require('objection')

class VehiclesModel extends Model {
    static get tableName() {
        return 'vehicles'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                typeId: { type: 'string' },
                locationId: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                statusId: { type: 'string' },
                picture: { type: 'string' },
                stock: { type: 'number' },
                like: { type: 'number' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {}
}

module.exports = VehiclesModel