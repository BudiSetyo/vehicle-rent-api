const PaymentsModel = require('../../models/api/payments')

const createPayment = async (data) => {
    try {
        const _data = await PaymentsModel.query().insert(data)

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

const editPayment = async (reservationId, data) => {
    try {
        const _data = await PaymentsModel.query()
            .patch(data)
            .where('payments.reservationId', reservationId)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        console.log(err)
        return {
            error: true,
            data: err,
        }
    }
}

const deletePayment = async (id) => {
    try {
        const _data = await PaymentsModel.query()
            .delete()
            .where('payments.reservationId', id)

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

const getAllPayment = async () => {
    try {
        const _data = await PaymentsModel.query().orderBy(
            'payments.updateAt',
            'DESC'
        )

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
    createPayment,
    editPayment,
    deletePayment,
    getAllPayment,
}
