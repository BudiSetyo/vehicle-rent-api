const express = require('express')
const locationController = require('../../../controllers/api/locations')

const router = express.Router()

router.get('/', locationController.getAllLocation)

module.exports = router
