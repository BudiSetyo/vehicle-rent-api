const reservationsSchema = require('../../schemes/api/reservations')
const { response } = require('../../utils/response')

const addReservation = async (req, res) => {
    const { userId, vehicleId } = req.query
    const { quantity, startDate, endDate } = req.body

    const _data = await reservationsSchema.createReservation({
        userId,
        vehicleId,
        quantity,
        startDate,
        endDate,
    })

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Add reservation failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Add reservation success',
    })
}

module.exports = {
    addReservation,
}
