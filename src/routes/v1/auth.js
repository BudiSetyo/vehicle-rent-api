const express = require('express')
const authController = require('../../controllers/api/auth')
// const authMiddleware = require('../../middlewares/auth')
const validate = require('../../middlewares/validate')
const authValidation = require('../../validations/auth')

const router = express.Router()

router.post(
    '/register',
    validate(authValidation.register),
    authController.register
)
router.post('/login', authController.login)
// router.get('/hello', authMiddleware.authentication, (req, res) =>
//     res.send('success')
// )

module.exports = router
