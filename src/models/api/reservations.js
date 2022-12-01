const { Model } = require('objection')

class ReservationsModel extends Model {
    static get tableName() {
        return 'reservations'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'string' },
                userId: { type: 'string' },
                vehicleId: { type: 'string' },
                quantity: { type: 'number' },
                startDate: { type: 'string' },
                endDate: { type: 'string' },
                bookingCode: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {
        const PaymentsModel = require('./payments')
        const VehiclesModel = require('./vehicles')

        return {
            payment: {
                relation: Model.BelongsToOneRelation,
                modelClass: PaymentsModel,
                join: {
                    from: 'reservations.id',
                    to: 'payments.reservationId',
                },
            },
            vehicleReservation: {
                relation: Model.BelongsToOneRelation,
                modelClass: VehiclesModel,
                join: {
                    from: 'reservations.vehicleId',
                    to: 'vehicles.id',
                },
            },
        }
    }
}

module.exports = ReservationsModel
