const Joi = require('joi')

const addVehicle = {
    body: Joi.object().keys({
        name: Joi.string(),
        typeId: Joi.string(),
        locationId: Joi.string(),
        capacity: Joi.number(),
        isPopular: Joi.boolean(),
        description: Joi.string(),
        price: Joi.number(),
        prePayment: Joi.number(),
        statusId: Joi.string(),
        picture: Joi.string(),
        stock: Joi.number(),
    }),
}

const editImageVehicle = {
    query: Joi.object().keys({
        vehicleId: Joi.string(),
    }),
    body: Joi.object().keys({
        picture: Joi.string(),
    }),
}

const editVehicle = {
    query: Joi.object().keys({
        vehicleId: Joi.string(),
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
        popular: Joi.boolean(),
        page: Joi.number(),
        row: Joi.number(),
    }),
}

const getVehicleById = {
    params: Joi.object().keys({
        vehicleId: Joi.string(),
    }),
}
const deleteVehicle = {
    query: Joi.object().keys({
        vehicleId: Joi.string(),
    }),
}

module.exports = {
    addVehicle,
    editImageVehicle,
    editVehicle,
    getAllVehicle,
    getVehicleById,
    deleteVehicle,
}
