const adminSchema = require('../../schemes/cms/admin')
const { response } = require('../../utils/response')

const createAdmin = async (req, res) => {
    const data = req.body

    const register = await adminSchema.insertAdmin(data)

    if (register.error) {
        return response(res, 400, {
            error: true,
            message: 'Register admin failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Register admin success',
    })
}

const editAdmin = async (req, res) => {
    const data = req.body
    const userId = req.query.id

    const _data = await adminSchema.editAdmin(data, userId)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Edit admin failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Edit admin success',
    })
}

const deleteAdmin = async (req, res) => {
    const { userId } = req.params

    const _data = await adminSchema.deleteAdmin(userId)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Delete admin failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Delete admin success',
    })
}

const getAllAdmin = async (req, res) => {
    const { search, page, row } = req.query

    const _data = await adminSchema.getAllAdmin(search, page, row)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all admin failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get all admin success',
        data: _data.data,
    })
}

const getTotalData = async (req, res) => {
    const _data = await adminSchema.getAllCountData()

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get total data failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get total data success',
        data: _data.data,
    })
}

module.exports = {
    createAdmin,
    editAdmin,
    deleteAdmin,
    getAllAdmin,
    getTotalData,
}
