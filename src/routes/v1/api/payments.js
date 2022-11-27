const express = require('express')
const paymentsController = require('../../../controllers/api/payments')
const authMiddleware = require('../../../middlewares/auth')
// const validate = require('../../middlewares/validate')
// const usersValidation = require('../../validations/users')

const router = express.Router()

router
    .route('/')
    .post(authMiddleware.authentication, paymentsController.addPayment)
    .patch(authMiddleware.authentication, paymentsController.editPayment)

module.exports = router
