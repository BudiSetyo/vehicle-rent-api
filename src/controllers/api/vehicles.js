const vehiclesSchema = require('../../schemes/api/vehicles')
const { response } = require('../../utils/response')

const addVehicle = async (req, res) => {
    const data = req.body

    const _data = await vehiclesSchema.createVehicle(data)

    console.log(data)

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

module.exports = {
    addVehicle,
}
