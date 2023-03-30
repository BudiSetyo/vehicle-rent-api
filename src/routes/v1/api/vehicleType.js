const express = require('express')
const vehicleTypeController = require('../../../controllers/api/vehicleTypes')

const router = express.Router()

router.get('/', vehicleTypeController.getAllTypes)

module.exports = router
