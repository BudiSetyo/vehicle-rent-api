const express = require('express')
const customerController = require('../../../controllers/cms/customer')
const authMiddleware = require('../../../middlewares/auth')

const router = express.Router()

router.get(
    '/',
    authMiddleware.authentication,
    customerController.getAllCustomer
)

router.get(
    '/detail',
    authMiddleware.authentication,
    customerController.getDetailCustomer
)

module.exports = router
