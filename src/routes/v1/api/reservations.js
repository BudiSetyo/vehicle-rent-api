const express = require('express')
const reservationsController = require('../../../controllers/api/reservations')
const authMiddleware = require('../../../middlewares/auth')
const validate = require('../../../middlewares/validate')
const validation = require('../../../validations/reservations')

const router = express.Router()

router
    .route('/')
    .post(
        authMiddleware.authentication,
        validate(validation.addReservation),
        reservationsController.addReservation
    )
    .delete(
        authMiddleware.authentication,
        validate(validation.deleteHistory),
        reservationsController.deleteHistory
    )
    .get(
        authMiddleware.authentication,
        reservationsController.getAllReservation
    )

router.get(
    '/detail/:reservationId',
    reservationsController.getReservationDetail
)

module.exports = router
