const express = require('express')
const vehiclesController = require('../../controllers/api/vehicles')
const authMiddleware = require('../../middlewares/auth')

const router = express.Router()

router
    .route('/')
    .post(authMiddleware.authentication, vehiclesController.addVehicle)
    .get(authMiddleware.authentication, vehiclesController.getAllVehicle)

module.exports = router
