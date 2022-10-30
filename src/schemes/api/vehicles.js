const VehiclesModel = require('../../models/api/vehicles')

const createVehicle = async (data) => {
    try {
        const _data = await VehiclesModel.query().insert(data)

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
    createVehicle,
}
