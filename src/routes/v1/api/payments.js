const express = require('express')
const paymentsController = require('../../../controllers/api/payments')
const authMiddleware = require('../../../middlewares/auth')
const validate = require('../../../middlewares/validate')
const validation = require('../../../validations/payments')

const router = express.Router()

router
    .route('/')
    .post(
        authMiddleware.authentication,
        validate(validation.addPayment),
        paymentsController.addPayment
    )
    .patch(authMiddleware.authentication, paymentsController.editPayment)

module.exports = router
