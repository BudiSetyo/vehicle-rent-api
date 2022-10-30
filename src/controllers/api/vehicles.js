const vehiclesSchema = require('../../schemes/api/vehicles')
const { response } = require('../../utils/response')

const addVehicle = async (req, res) => {
    const data = req.body

    const _data = await vehiclesSchema.createVehicle(data)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Add vehicle failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Add vehicle success',
    })
}

const getAllVehicle = async (req, res) => {
    const { search, type, location, popular, page, row } = req.params

    const _data = await vehiclesSchema.getAllVehicle(
        search,
        type,
        location,
        popular,
        page,
        row
    )

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all vehicles failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get all vehicles success',
        data: _data,
    })
}

module.exports = {
    addVehicle,
    getAllVehicle,
}
