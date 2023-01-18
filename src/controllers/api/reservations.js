const reservationsSchema = require('../../schemes/api/reservations')
const paymentsSchema = require('../../schemes/api/payments')
const vehicleSchema = require('../../schemes/api/vehicles')
const { response } = require('../../utils/response')

const addReservation = async (req, res) => {
    const userId = req.credential.id
    const { vehicleId } = req.query
    const {
        quantity,
        startDate,
        endDate,
        paymentType,
        status,
        isCompleted,
        paymentCode,
        totalPrice,
        days,
    } = req.body

    const reservation = await reservationsSchema.createReservation({
        userId,
        vehicleId,
        quantity,
        startDate,
        endDate,
        totalPrice,
        days,
    })

    if (reservation.error) {
        return response(res, 400, {
            error: true,
            message: 'Add reservation failed',
        })
    }

    const payment = await paymentsSchema.createPayment({
        reservationId: reservation.data.id,
        paymentType,
        status,
        isCompleted,
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
        data: reservation.data,
    })
}

const getAllReservation = async (req, res) => {
    const userId = req.credential.id
    const { search, type, date } = req.query

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
        data: _data.data,
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

const getReservationDetail = async (req, res) => {
    const { reservationId } = req.params

    const _reservation = await reservationsSchema.getReservationDetail(
        reservationId
    )

    if (_reservation.error) {
        return response(res, 400, {
            error: true,
            message: 'Get Detail Reservation Failed',
        })
    }

    const _vehicle = await vehicleSchema.getVehicleById(
        _reservation.data[0].vehicleId
    )

    if (_vehicle.error) {
        return response(res, 400, {
            error: true,
            message: 'Get Detail Reservation Failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get Detail Reservation Success',
        data: { reservation: _reservation.data[0], vehicle: _vehicle.data[0] },
    })
}

module.exports = {
    addReservation,
    getAllReservation,
    deleteHistory,
    editReservation,
    getReservationDetail,
}
