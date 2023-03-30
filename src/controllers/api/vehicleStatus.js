const vehicleStatusSchema = require('../../schemes/api/vehicleStatus')
const { response } = require('../../utils/response')

const getAllStatus = async (req, res) => {
    const _data = await vehicleStatusSchema.getAllVehicleStatus()

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get vehicle status failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get vehicle status success',
        data: _data.data,
    })
}

module.exports = {
    getAllStatus,
}
