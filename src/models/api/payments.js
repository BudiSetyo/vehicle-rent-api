const { Model } = require('objection')

class PaymentsModel extends Model {
    static get tableName() {
        return 'payments'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'string' },
                reservationId: { type: 'string' },
                paymentType: { type: 'string' },
                status: { type: 'string' },
                isCompleted: { type: 'boolean' },
                paymentCode: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {}
}

module.exports = PaymentsModel
