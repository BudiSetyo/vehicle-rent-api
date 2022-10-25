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
            },
        }
    }

    static get relationMappings() {}
}

module.exports = VehiclesModel
