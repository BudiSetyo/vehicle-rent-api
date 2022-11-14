const express = require('express')
const vehiclesController = require('../../../controllers/api/vehicles')
const authMiddleware = require('../../../middlewares/auth')
const multer = require('../../../utils/multer')

const router = express.Router()

router
    .route('/')
    .post(authMiddleware.authentication, vehiclesController.addVehicle)
    .get(authMiddleware.authentication, vehiclesController.getAllVehicle)
    .patch(authMiddleware.authentication, vehiclesController.editVehicle)

router
    .route('/detail')
    .get(authMiddleware.authentication, vehiclesController.getVehicleById)

router.patch(
    '/image',
    authMiddleware.authentication,
    multer.single('image'),
    vehiclesController.editImageVehicle
)

module.exports = router
