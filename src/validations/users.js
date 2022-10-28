const Joi = require('joi')

const editProfile = {
    body: Joi.object().keys({
        email: Joi.string(),
        address: Joi.string(),
        name: Joi.string(),
        birth: Joi.string(),
        gender: Joi.string(),
    }),
}

module.exports = {
    editProfile,
}
