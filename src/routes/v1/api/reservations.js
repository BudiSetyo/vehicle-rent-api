const express = require('express')
const reservationsController = require('../../../controllers/api/reservations')
const authMiddleware = require('../../../middlewares/auth')
// const validate = require('../../middlewares/validate')
// const usersValidation = require('../../validations/users')

const router = express.Router()

router
    .route('/')
    .post(authMiddleware.authentication, reservationsController.addReservation)

module.exports = router
