const express = require('express')
const authController = require('../../controllers/api/auth')

const router = express.Router()

router.post('/register', authController.register)

module.exports = router
