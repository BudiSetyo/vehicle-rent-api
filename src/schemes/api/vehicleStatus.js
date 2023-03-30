const VehicleStatusModel = require('../../models/api/vehicleStatus')

const getAllVehicleStatus = async () => {
    try {
        const _data = await VehicleStatusModel.query()

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
    getAllVehicleStatus,
}
