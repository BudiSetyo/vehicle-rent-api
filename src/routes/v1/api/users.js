const express = require('express')
const usersController = require('../../../controllers/api/users')
const authMiddleware = require('../../../middlewares/auth')
const multer = require('../../../utils/multer')
// const validate = require('../../middlewares/validate')
// const usersValidation = require('../../validations/users')

const router = express.Router()

router
    .route('/')
    .get(authMiddleware.authentication, usersController.getUserProfile)

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

router.patch(
    '/avatar',
    authMiddleware.authentication,
    multer.single('image'),
    usersController.updateAvatar
)

module.exports = router
