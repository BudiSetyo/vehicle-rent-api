const paymentsSchema = require('../../schemes/api/payments')
const { response } = require('../../utils/response')

const addPayment = async (req, res) => {
    const { reservationId } = req.query
    const { paymentType, status, paymentCode } = req.body

    const _data = await paymentsSchema.createPayment({
        reservationId,
        paymentType,
        status,
        isCompleted,
        paymentCode,
    })

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Add payment failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Add payment success',
    })
}

const editPayment = async (req, res) => {
    const { reservationId } = req.query
    const { status, isCompleted } = req.body

    const _data = await paymentsSchema.editPayment(reservationId, {
        status,
        isCompleted,
    })

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Edit payment failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Edit payment success',
    })
}

module.exports = {
    addPayment,
    editPayment,
}
