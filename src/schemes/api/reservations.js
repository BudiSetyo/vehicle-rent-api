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
            .select('reservations.*')
            .withGraphFetched('payment')
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

const deleteReservation = async (id) => {
    try {
        const _data = await ReservationsModel.query().deleteById(id)

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

const getNewReservation = async (userId, vehicleId) => {
    try {
        const _data = await ReservationsModel.query()
            .findOne({
                userId: userId,
                vehicleId: vehicleId,
            })
            .orderBy('updatedAt', 'desc')

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

const editReservation = async (userId, vehicleId, data) => {
    try {
        const _data = await ReservationsModel.query()
            .patch(data)
            .where('userId', userId)
            .andWhere('vehicleId', vehicleId)

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
    deleteReservation,
    getNewReservation,
    editReservation,
}
