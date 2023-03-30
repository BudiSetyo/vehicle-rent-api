const VehicleTypesModel = require('../../models/api/vehicleType')

const getAllVehicleTypes = async () => {
    try {
        const _data = await VehicleTypesModel.query()

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
    getAllVehicleTypes,
}
