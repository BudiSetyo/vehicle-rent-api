const vehicleTypesSchema = require('../../schemes/api/vehicleTypes')
const { response } = require('../../utils/response')

const getAllTypes = async (req, res) => {
    const _data = await vehicleTypesSchema.getAllVehicleTypes()

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get vehicle types failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get vehicle types success',
        data: _data.data,
    })
}

module.exports = {
    getAllTypes,
}
