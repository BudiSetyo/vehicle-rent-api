const Joi = require('joi')
const custom = require('./custom')

const register = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(custom.password),
        name: Joi.string().required(),
    }),
}

const login = {
    body: Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string().custom(custom.password),
    }),
}

module.exports = {
    register,
    login,
}
