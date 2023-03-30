const express = require('express')
const vehicleStatusController = require('../../../controllers/api/vehicleStatus')

const router = express.Router()

router.get('/', vehicleStatusController.getAllStatus)

module.exports = router
