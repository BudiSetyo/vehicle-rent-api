const express = require('express')
const usersController = require('../../../controllers/api/users')
const authMiddleware = require('../../../middlewares/auth')
// const validate = require('../../middlewares/validate')
// const usersValidation = require('../../validations/users')

const router = express.Router()

router.post(
    '/edit-profile',
    authMiddleware.authentication,
    usersController.editProfile
)

router.post(
    '/edit-password',
    authMiddleware.authentication,
    usersController.editPassword
)

module.exports = router
