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

    static get relationMappings() {
        const TypesModel = require('./vehicleType')
        const LocationsModel = require('./location')
        const StatusModel = require('./vehicleStatus')

        return {
            vehicleType: {
                relation: Model.BelongsToOneRelation,
                modelClass: TypesModel,
                join: {
                    from: 'vehicles.typeId',
                    to: 'vehicleType.id',
                },
            },

            vehicleLocation: {
                relation: Model.BelongsToOneRelation,
                modelClass: LocationsModel,
                join: {
                    from: 'vehicles.locationId',
                    to: 'location.id',
                },
            },

            vehicleStatus: {
                relation: Model.BelongsToOneRelation,
                modelClass: StatusModel,
                join: {
                    from: 'vehicles.statusId',
                    to: 'vehicleStatus.id',
                },
            },
        }
    }
}

module.exports = VehiclesModel
