const ReservationsModel = require('../../models/api/reservations')
const PaymentsModel = require('../../models/api/payments')

const getAllTransaction = async (search, startDate, endDate, page, row) => {
    try {
        if (search && !startDate && !endDate) {
            const paramSearch = `%${search?.toUpperCase()}%` || ''
            const knex = ReservationsModel.knex()

            const _data = await knex
                .select(
                    'reservations.*',
                    'users.name as customer',
                    'vehicles.name as vehicle',
                    'payments.id as paymentId',
                    'payments.paymentType',
                    'payments.status as paymentStatus',
                    'payments.isCompleted as paymentCompleted'
                )
                .from('reservations')
                .leftJoin(
                    'payments',
                    'reservations.id',
                    'payments.reservationId'
                )
                .leftJoin('users', 'reservations.userId', 'users.id')
                .leftJoin('vehicles', 'reservations.vehicleId', 'vehicles.id')
                .whereRaw('UPPER(users.name) like ?', paramSearch)
                .orderBy('reservations.updatedAt', 'DESC')
                .offset((page - 1) * row || 0)
                .limit(row || 10)

            const countData = await knex
                .count('*')
                .from('reservations')
                .leftJoin(
                    'payments',
                    'reservations.id',
                    'payments.reservationId'
                )
                .leftJoin('users', 'reservations.userId', 'users.id')
                .leftJoin('vehicles', 'reservations.vehicleId', 'vehicles.id')
                .whereRaw('UPPER(users.name) like ?', paramSearch)

            return {
                error: false,
                data: {
                    results: _data,
                    total: parseInt(countData[0].count),
                },
            }
        }

        if (!search && !startDate && !endDate) {
            const _data = await ReservationsModel.query()
                .leftJoinRelated(
                    '[userReservation, vehicleReservation, payment]'
                )
                .select(
                    'reservations.*',
                    'userReservation.name as customer',
                    'vehicleReservation.name as vehicle',
                    'payment.id as paymentId',
                    'payment.paymentType',
                    'payment.status as paymentStatus',
                    'payment.isCompleted as paymentCompleted'
                )
                .orderBy('reservations.updatedAt', 'DESC')
                .page(page - 1 || 0, row || 10)

            return {
                error: false,
                data: _data,
            }
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const approveTransaction = async (status, id) => {
    try {
        const _data = await PaymentsModel.query()
            .patch({ status: status })
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

const finishTransaction = async (complete, id) => {
    try {
        const _data = await PaymentsModel.query()
            .patch({ isCompleted: complete })
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

module.exports = {
    getAllTransaction,
    approveTransaction,
    finishTransaction,
}
