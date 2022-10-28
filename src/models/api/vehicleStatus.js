const { Model } = require('objection')

class VehicleStatusModel extends Model {
    static get tableName() {
        return 'vehicleStatus'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {}
}

module.exports = VehicleStatusModel
