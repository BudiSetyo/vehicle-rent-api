const express = require('express')
const vehiclesController = require('../../../controllers/api/vehicles')
const authMiddleware = require('../../../middlewares/auth')
const multer = require('../../../utils/multer')
const validate = require('../../../middlewares/validate')
const validation = require('../../../validations/vehicles')

const router = express.Router()

router
    .route('/')
    .get(validate(validation.getAllVehicle), vehiclesController.getAllVehicle)
    .patch(
        authMiddleware.authentication,
        validate(validation.editVehicle),
        vehiclesController.editVehicle
    )
    .delete(
        authMiddleware.authentication,
        validate(validation.deleteVehicle),
        vehiclesController.deleteVehicle
    )

router.post(
    '/add',
    authMiddleware.authentication,
    validate(validation.addVehicle),
    vehiclesController.addVehicle
)

router
    .route('/image')
    .post(
        authMiddleware.authentication,
        multer.single('image'),
        vehiclesController.addImageVehicle
    )
    .patch(
        authMiddleware.authentication,
        multer.single('image'),
        vehiclesController.editImageVehicle
    )

router.get('/detail/:vehicleId', vehiclesController.getVehicleById)

router.route('/type').get(vehiclesController.getAllVehicleType)

module.exports = router
