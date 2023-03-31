const ReservationsModel = require('../../models/api/reservations')
// const VehiclesModel = require('../../models/api/vehicles')

const createReservation = async (data) => {
    try {
        const _data = await ReservationsModel.query().insertAndFetch(data)

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

const getAllReservation = async (userId, search, type, date) => {
    try {
        if (!search && !type && !date) {
            const _data = await ReservationsModel.query()
                .select('reservations.*')
                .withGraphFetched('payment')
                .withGraphFetched('vehicleReservation')
                .where('reservations.userId', userId)
                .orderBy('reservations.updatedAt', 'DESC')

            return {
                error: false,
                data: _data,
            }
        }
    } catch (err) {
        console.log(err)
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

const editReservation = async (id, data) => {
    try {
        const _data = await ReservationsModel.query()
            .patch(data)
            .where('id', id)

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

const getReservationDetail = async (id) => {
    try {
        const _data = await ReservationsModel.query()
            .leftJoinRelated('[payment, userReservation as user]')
            .select('reservations.*')
            .select('user.name as userName', 'user.email', 'user.phoneNumber')
            .withGraphFetched('payment')
            .where('reservations.id', id)
            .andWhere('payment.reservationId', id)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        // console.log(err)
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
    getReservationDetail,
}
