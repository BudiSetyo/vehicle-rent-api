const reservationsSchema = require('../../schemes/api/reservations')
const paymentsSchema = require('../../schemes/api/payments')
const { response } = require('../../utils/response')

const addReservation = async (req, res) => {
    const { userId, vehicleId } = req.query
    const {
        quantity,
        startDate,
        endDate,
        paymentType,
        statusPayment,
        paymentCode,
        price,
    } = req.body

    const reservation = await reservationsSchema.createReservation({
        userId,
        vehicleId,
        quantity,
        startDate,
        endDate,
        price,
    })

    if (reservation.error) {
        return response(res, 400, {
            error: true,
            message: 'Add reservation failed',
        })
    }

    const getNewReservation = await reservationsSchema.getNewReservation(
        userId,
        vehicleId
    )

    if (getNewReservation.error) {
        return response(res, 400, {
            error: true,
            message: 'Get reservation failed',
        })
    }

    if (getNewReservation.data === undefined) {
        return response(res, 400, {
            error: true,
            message: 'Get reservation failed',
        })
    }

    const payment = await paymentsSchema.createPayment({
        reservationId: getNewReservation.data.id,
        paymentType,
        statusPayment,
        paymentCode,
    })

    if (payment.error) {
        return response(res, 400, {
            error: true,
            message: 'Add payment failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Add reservation success',
    })
}

const getAllReservation = async (req, res) => {
    const { userId, search, type, date } = req.query

    const _data = await reservationsSchema.getAllReservation(
        userId,
        search,
        type,
        date
    )

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all reservation failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get all reservation success',
        data: _data,
    })
}

const deleteHistory = async (req, res) => {
    const { reservationId } = req.query

    const deletePayment = await paymentsSchema.deletePayment(reservationId)
    const deleteReservation = await reservationsSchema.deleteReservation(
        reservationId
    )

    if (deletePayment.error) {
        return response(res, 400, {
            error: true,
            message: 'Delete payment failed',
        })
    }

    if (deleteReservation.error) {
        return response(res, 400, {
            error: true,
            message: 'Delete reservation failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Delete history success',
    })
}

const editReservation = async (req, res) => {
    const { reservationId } = req.query
    const { quantity, startDate, endDate, price, paymentType } = req.body

    const reservation = await reservationsSchema.editReservation(
        reservationId,
        {
            quantity,
            startDate,
            endDate,
            price,
        }
    )

    if (reservation.error) {
        return response(res, 400, {
            error: true,
            message: 'Edit reservation failed',
        })
    }

    const payment = await paymentsSchema.editPayment(reservationId, {
        paymentType,
    })

    if (payment.error) {
        return response(res, 400, {
            error: true,
            message: 'Edit reservation failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Edit reservation success',
    })
}

module.exports = {
    addReservation,
    getAllReservation,
    deleteHistory,
    editReservation,
}
