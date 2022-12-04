const Joi = require('joi')

const addVehicle = {
    body: Joi.object().keys({
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

const editImageVehicle = {
    query: Joi.object().keys({
        id: Joi.string(),
    }),
    body: Joi.object().keys({
        picture: Joi.string(),
    }),
}

const editVehicle = {
    query: Joi.object().keys({
        id: Joi.string(),
    }),
    body: Joi.object().keys({
        name: Joi.string(),
        typeId: Joi.string(),
        locationId: Joi.string(),
        description: Joi.string(),
        price: Joi.number(),
        statusId: Joi.string(),
        stock: Joi.number(),
    }),
}

const getAllVehicle = {
    query: Joi.object().keys({
        search: Joi.string(),
        type: Joi.string(),
        location: Joi.string(),
        page: Joi.number(),
        row: Joi.number,
    }),
}

const getVehicleById = {
    query: Joi.object().keys({
        id: Joi.string(),
    }),
}

module.exports = {
    addVehicle,
    editImageVehicle,
    editVehicle,
    getAllVehicle,
    getVehicleById,
}
