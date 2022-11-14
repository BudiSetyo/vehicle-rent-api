const express = require('express')
const usersController = require('../../../controllers/api/users')
const authMiddleware = require('../../../middlewares/auth')
// const validate = require('../../middlewares/validate')
// const usersValidation = require('../../validations/users')

const router = express.Router()

router.patch(
    '/edit-profile',
    authMiddleware.authentication,
    usersController.editProfile
)

router.patch(
    '/edit-password',
    authMiddleware.authentication,
    usersController.editPassword
)

module.exports = router
