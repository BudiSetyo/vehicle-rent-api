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

const getAllReservation = async (userId) => {
    try {
        const _data = await ReservationsModel.query()
            .leftJoinRelated('payment')
            .select(
                'reservations.id',
                'reservations.userId',
                'reservations.vehicleId',
                'reservations.quantity',
                'reservations.startDate',
                'reservations.endDate',
                'reservations.bookingCode',
                'reservations.createdAt',
                'reservations.updatedAt',
                'payment.paymentType',
                'payment.statusPaymentCode'
            )
            .where('reservations.userId', userId)

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
    getAllReservation,
}
