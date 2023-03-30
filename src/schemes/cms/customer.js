const UsersModel = require('../../models/api/users')

const getAllCustomer = async (search, page, row) => {
    try {
        if (search) {
            const paramSearch = `%${search?.toUpperCase()}%` || ''
            const _data = await UsersModel.query()
                .leftJoinRelated('location')
                .select(
                    'users.id',
                    'users.email',
                    'users.name',
                    'users.gender',
                    'users.address',
                    'users.phoneNumber',
                    'users.birth',
                    'users.locationId',
                    'location.name as location',
                    'users.profileImage',
                    'users.createdAt',
                    'users.updatedAt'
                )
                .whereRaw('UPPER(users.name) like ?', paramSearch)
                .orderBy('users.updatedAt', 'DESC')
                .page(page - 1 || 0, row || 10)

            return {
                error: false,
                data: _data,
            }
        }

        const _data = await UsersModel.query()
            .leftJoinRelated('location')
            .select(
                'users.id',
                'users.email',
                'users.name',
                'users.gender',
                'users.address',
                'users.phoneNumber',
                'users.birth',
                'users.locationId',
                'location.name as location',
                'users.profileImage',
                'users.createdAt',
                'users.updatedAt'
            )
            .orderBy('users.updatedAt', 'DESC')
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

const getCustomerById = async (id) => {
    try {
        const _data = await UsersModel.query()
            .leftJoinRelated('location')
            .select(
                'users.id',
                'users.email',
                'users.name',
                'users.gender',
                'users.address',
                'users.phoneNumber',
                'users.birth',
                'users.locationId',
                'location.name as location',
                'users.profileImage',
                'users.createdAt',
                'users.updatedAt'
            )
            .where('users.id', id)

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

module.exports = {
    getAllCustomer,
    getCustomerById,
}
