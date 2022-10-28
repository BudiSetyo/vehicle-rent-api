const { Model } = require('objection')

class ChatsModel extends Model {
    static get tableName() {
        return 'chats'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'string' },
                userId: { type: 'string' },
                vehiclesId: { type: 'string' },
                text: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {}
}

module.exports = ChatsModel
