const { Model, mixin } = require('objection')
const Password = require('objection-password')()
const softDelete = require('objection-soft-delete')
const guid = require('objection-guid')()
const moment = require('moment')
const { DBErrors } = require('objection-db-errors')

class UsersModel extends mixin(Model, [
    Password,
    guid,
    softDelete({
        columnName: 'deletedAt',
        deletedValue: moment().format(),
        notDeletedValue: null,
    }),
    DBErrors,
]) {
    static get tableName() {
        return 'users'
    }

    get secureFields() {
        return ['password']
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'string' },
                email: { type: 'string', minLength: 1, maxLength: 255 },
                password: { type: 'string' },
                name: { type: 'string' },
                roleId: { type: 'string', nullable: true },
                gender: {
                    type: 'string',
                    enum: ['male', 'female'],
                    default: 'male',
                },
                address: { type: 'string' },
                phoneNumber: { type: 'string' },
                birth: { type: 'string' },
                locationId: { type: 'string', nullable: true },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {
        const LocationsModel = require('./location')
        const RolesModel = require('./roles')
        const ChatsModel = require('./chats')

        return {
            location: {
                relation: Model.BelongsToOneRelation,
                modelClass: LocationsModel,
                join: {
                    from: 'users.locationId',
                    to: 'location.id',
                },
            },
            roles: {
                relation: Model.BelongsToOneRelation,
                modelClass: RolesModel,
                join: {
                    from: 'users.roleId',
                    to: 'roles.id',
                },
            },
            chats: {
                relation: Model.BelongsToOneRelation,
                modelClass: ChatsModel,
                join: {
                    from: 'users.id',
                    to: 'chats.userId',
                },
            },
        }
    }
}

module.exports = UsersModel
