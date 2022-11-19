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

const editPayment = async (status, id) => {
    try {
        const _data = await PaymentsModel.query()
            .patch({ statusPayment: status })
            .where({ id: id })

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
}
