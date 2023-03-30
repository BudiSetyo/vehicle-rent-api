const AdminModel = require('../../models/cms/admin')

const insertAdmin = async (data) => {
    try {
        const _data = await AdminModel.query().insert(data)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const editAdmin = async (data, id) => {
    try {
        const _data = await AdminModel.query().patch(data).findById(id)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const deleteAdmin = async (id) => {
    try {
        const _data = await AdminModel.query().deleteById(id)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getAdminByEmail = async (email) => {
    try {
        const _data = await AdminModel.query().findOne({ email: email })

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getAllAdmin = async (search, page, row) => {
    try {
        if (search) {
            const paramSearch = `%${search?.toUpperCase()}%` || ''
            const _data = await AdminModel.query()
                .leftJoinRelated('location')
                .select(
                    'admin.id',
                    'admin.email',
                    'admin.name',
                    'admin.gender',
                    'admin.address',
                    'admin.phoneNumber',
                    'admin.locationId',
                    'location.name as location',
                    'admin.profileImage',
                    'admin.createdAt',
                    'admin.updatedAt'
                )
                .whereRaw('UPPER(admin.name) like ?', paramSearch)
                .orderBy('admin.updatedAt', 'DESC')
                .page(page - 1 || 0, row || 10)

            return {
                error: false,
                data: _data,
            }
        }

        const _data = await AdminModel.query()
            .leftJoinRelated('location')
            .select(
                'admin.id',
                'admin.email',
                'admin.name',
                'admin.gender',
                'admin.address',
                'admin.phoneNumber',
                'admin.locationId',
                'location.name as location',
                'admin.profileImage',
                'admin.createdAt',
                'admin.updatedAt'
            )
            .orderBy('admin.updatedAt', 'DESC')
            .page(page - 1 || 0, row || 10)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getAllCountData = async () => {
    try {
        const knex = AdminModel.knex()

        const customer = await knex.raw(
            'SELECT COUNT(*) AS customer FROM users'
        )
        const vehicle = await knex.raw(
            'SELECT COUNT(*) AS vehicle FROM vehicles'
        )
        const transaction = await knex.raw(
            'SELECT COUNT(*) AS transaction FROM reservations'
        )
        const admin = await knex.raw('SELECT COUNT(*) AS admin FROM admin')

        return {
            error: false,
            data: {
                customer: customer.rows[0].customer,
                vehicle: vehicle.rows[0].vehicle,
                transaction: transaction.rows[0].transaction,
                admin: admin.rows[0].admin,
            },
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

module.exports = {
    insertAdmin,
    editAdmin,
    deleteAdmin,
    getAdminByEmail,
    getAllAdmin,
    getAllCountData,
}
