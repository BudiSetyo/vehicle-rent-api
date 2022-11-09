const express = require('express')
const vehiclesController = require('../../../controllers/api/vehicles')
const authMiddleware = require('../../../middlewares/auth')
// const multer = require('../../../utils/multer')

const router = express.Router()

router
    .route('/')
    .post(authMiddleware.authentication, vehiclesController.addVehicle)
    .get(authMiddleware.authentication, vehiclesController.getAllVehicle)

router
    .route('/detail')
    .get(authMiddleware.authentication, vehiclesController.getVehicleById)

module.exports = router
