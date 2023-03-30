const express = require('express')
const authController = require('../../../controllers/cms/auth')

const router = express.Router()

router.post('/', authController.loginCms)

module.exports = router
