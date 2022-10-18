const { Model, mixin } = require('objection')
const Password = require('objection-password')()
const softDelete = require('objection-soft-delete')
const guid = require('objection-guid')()
const _ = require('lodash')
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

    $formatJson(json) {
        json = super.$formatJson(json)
        return _.omit(json, this.secureFields)
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email'],
            properties: {},
        }
    }

    static get relationMappings() {}
}

module.exports = UsersModel
