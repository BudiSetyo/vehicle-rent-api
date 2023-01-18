const Joi = require('joi')

const addReservation = {
    query: Joi.object().keys({
        userId: Joi.string(),
        vehicleId: Joi.string(),
    }),
    body: Joi.object().keys({
        quantity: Joi.number(),
        startDate: Joi.string(),
        endDate: Joi.string(),
        paymentType: Joi.string(),
        status: Joi.string(),
        isCompleted: Joi.boolean(),
        paymentCode: Joi.string(),
        totalPrice: Joi.number(),
        days: Joi.number(),
    }),
}

const getAllReservation = {
    query: Joi.object().keys({
        userId: Joi.string(),
        search: Joi.string(),
        type: Joi.string(),
        date: Joi.string(),
    }),
}

const deleteHistory = {
    query: Joi.object().keys({
        reservationId: Joi.string(),
    }),
}

const editReservation = {
    query: Joi.object().keys({
        reservationId: Joi.string(),
    }),
    body: Joi.object().keys({
        quantity: Joi.number(),
        startDate: Joi.string(),
        endDate: Joi.string(),
        price: Joi.number(),
        paymentType: Joi.string(),
    }),
}

module.exports = {
    addReservation,
    getAllReservation,
    deleteHistory,
    editReservation,
}
