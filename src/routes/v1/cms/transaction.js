const express = require('express')
const transactionController = require('../../../controllers/cms/transaction')
const authMiddleware = require('../../../middlewares/auth')

const router = express.Router()

router.get(
    '/',
    authMiddleware.authentication,
    transactionController.getAllTransaction
)

router.patch(
    '/approve',
    authMiddleware.authentication,
    transactionController.approveTransaction
)

router.patch(
    '/finish',
    authMiddleware.authentication,
    transactionController.finishTransaction
)

module.exports = router
