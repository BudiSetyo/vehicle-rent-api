const customerSchema = require('../../schemes/cms/customer')
const { response } = require('../../utils/response')

const getAllCustomer = async (req, res) => {
    const { search, page, row } = req.query

    const _data = await customerSchema.getAllCustomer(search, page, row)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all customer failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get all customer success',
        data: _data.data,
    })
}

const getDetailCustomer = async (req, res) => {
    const { userId } = req.query

    const _data = await customerSchema.getCustomerById(userId)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get detail customer failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get detail customer success',
        data: _data.data,
    })
}

module.exports = {
    getAllCustomer,
    getDetailCustomer,
}
