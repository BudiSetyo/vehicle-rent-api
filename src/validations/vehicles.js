const Joi = require('joi')

const addVehicle = {
    body: Joi.object.keys({
        name: Joi.string(),
        typeId: Joi.string(),
        locationId: Joi.string(),
        isPopular: Joi.boolean(),
        description: Joi.string(),
        price: Joi.number(),
        statusId: Joi.string(),
        picture: Joi.string(),
        stock: Joi.number(),
    }),
}

module.exports = {
    addVehicle,
}
