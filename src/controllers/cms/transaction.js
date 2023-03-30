const transactionSchema = require('../../schemes/cms/transaction')
const { response } = require('../../utils/response')

const getAllTransaction = async (req, res) => {
    const { search, startDate, endDate, page, row } = req.query

    const _data = await transactionSchema.getAllTransaction(
        search,
        startDate,
        endDate,
        page,
        row
    )

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all transaction failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get all transaction success',
        data: _data.data,
    })
}

const approveTransaction = async (req, res) => {
    const { status } = req.body
    const { reservationId } = req.query

    const _data = await transactionSchema.approveTransaction(
        status,
        reservationId
    )

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Approve transaction failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Approve transaction success',
    })
}

const finishTransaction = async (req, res) => {
    const { complete } = req.body
    const { reservationId } = req.query

    const _data = await transactionSchema.finishTransaction(
        complete,
        reservationId
    )

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Finish transaction failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Finish transaction success',
    })
}

module.exports = {
    getAllTransaction,
    approveTransaction,
    finishTransaction,
}
