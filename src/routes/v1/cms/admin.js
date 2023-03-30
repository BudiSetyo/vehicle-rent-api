const express = require('express')
const adminController = require('../../../controllers/cms/admin')
const authMiddleware = require('../../../middlewares/auth')

const router = express.Router()

router.post(
    '/register',
    authMiddleware.authentication,
    adminController.createAdmin
)

router.patch('/', authMiddleware.authentication, adminController.editAdmin)

router.delete('/', authMiddleware.authentication, adminController.deleteAdmin)

router.get('/', authMiddleware.authentication, adminController.getAllAdmin)

router.get(
    '/totalData',
    authMiddleware.authentication,
    adminController.getTotalData
)

module.exports = router
