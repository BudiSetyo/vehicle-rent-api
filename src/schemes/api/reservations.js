const ReservationsModel = require('../../models/api/reservations')

const createReservation = async (data) => {
    try {
        const _data = await ReservationsModel.query().insert(data)

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
    createReservation,
}
