const express = require('express')
const vehiclesController = require('../../controllers/api/vehicles')
const authMiddleware = require('../../middlewares/auth')

const router = express.Router()

router.post('/', authMiddleware.authentication, vehiclesController.addVehicle)

module.exports = router
