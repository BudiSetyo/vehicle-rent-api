const express = require('express')
const vehiclesController = require('../../../controllers/api/vehicles')
const authMiddleware = require('../../../middlewares/auth')
const multer = require('../../../utils/multer')
const validate = require('../../../middlewares/validate')
const validation = require('../../../validations/vehicles')

const router = express.Router()

router
    .route('/')
    .post(
        authMiddleware.authentication,
        validate(validation.addVehicle),
        vehiclesController.addVehicle
    )
    .get(validate(validation.getAllVehicle), vehiclesController.getAllVehicle)
    .patch(
        authMiddleware.authentication,
        validate(validation.editVehicle),
        vehiclesController.editVehicle
    )

router.route('/detail').get(vehiclesController.getVehicleById)

router.patch(
    '/image',
    authMiddleware.authentication,
    multer.single('image'),
    vehiclesController.editImageVehicle
)

module.exports = router
