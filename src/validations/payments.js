const Joi = require('joi')

const addPayment = {
    query: Joi.object().keys({
        reservationId: Joi.string(),
    }),
    body: Joi.object().keys({
        paymentType: Joi.string(),
        status: Joi.string(),
        isCompleted: Joi.boolean(),
        paymentCode: Joi.string(),
    }),
}

const editPayment = {
    query: Joi.object().keys({
        reservationId: Joi.string(),
    }),
    body: Joi.object().keys({
        statusPayment: Joi.boolean(),
    }),
}

module.exports = {
    addPayment,
    editPayment,
}
