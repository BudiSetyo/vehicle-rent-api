const { Model, mixin } = require('objection')
const Password = require('objection-password')()
const softDelete = require('objection-soft-delete')
const guid = require('objection-guid')()
const moment = require('moment')
const { DBErrors } = require('objection-db-errors')

class AdminModel extends mixin(Model, [
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
        return 'admin'
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
                email: { type: 'string' },
                password: { type: 'string' },
                name: { type: 'string' },
                gender: {
                    type: 'string',
                    enum: ['male', 'female'],
                    default: 'male',
                },
                address: { type: 'string' },
                phoneNumber: { type: 'string' },
                locationId: { type: 'string', nullable: true },
                profileImage: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {
        const LocationsModel = require('../api/location')

        return {
            location: {
                relation: Model.BelongsToOneRelation,
                modelClass: LocationsModel,
                join: {
                    from: 'admin.locationId',
                    to: 'location.id',
                },
            },
        }
    }
}

module.exports = AdminModel
