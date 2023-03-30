const locationSchema = require('../../schemes/api/locations')
const { response } = require('../../utils/response')

const getAllLocation = async (req, res) => {
    const _data = await locationSchema.getAllLocation()

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all location failed',
        })
    }

    return response(res, 200, {
        error: false,
        data: _data.data,
    })
}

module.exports = {
    getAllLocation,
}
