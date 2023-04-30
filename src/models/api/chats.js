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
                vehicleId: { type: 'string' },
                adminId: { type: 'string' },
                senderId: { type: 'string' },
                receiverId: { type: 'string' },
                text: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {
        const UsersModel = require('./users')
        const VehiclesModel = require('./vehicles')
        const AdminModel = require('../cms/admin')

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: UsersModel,
                join: {
                    from: 'chats.userId',
                    to: 'users.id',
                },
            },
            vehicle: {
                relation: Model.BelongsToOneRelation,
                modelClass: VehiclesModel,
                join: {
                    from: 'chats.vehicleId',
                    to: 'vehicles.id',
                },
            },
            admin: {
                relation: Model.BelongsToOneRelation,
                modelClass: AdminModel,
                join: {
                    from: 'chats.adminId',
                    to: 'admin.id',
                },
            },
        }
    }
}

module.exports = ChatsModel
