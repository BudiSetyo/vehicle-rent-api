const express = require('express')
const paymentsController = require('../../../controllers/api/payments')
const authMiddleware = require('../../../middlewares/auth')
// const validate = require('../../middlewares/validate')
// const usersValidation = require('../../validations/users')

const router = express.Router()

router
    .route('payment')
    .post(authMiddleware.authentication, paymentsController.addPayment)

module.exports = router
