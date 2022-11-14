const Joi = require('joi')
const custom = require('./custom')

const editProfile = {
    body: Joi.object().keys({
        email: Joi.string().email(),
        address: Joi.string(),
        name: Joi.string(),
        birth: Joi.string(),
        gender: Joi.string(),
    }),
}

const editPassword = {
    body: Joi.object().keys({
        password: Joi.string().custom(custom.password),
    }),
}

module.exports = {
    editProfile,
    editPassword,
}
