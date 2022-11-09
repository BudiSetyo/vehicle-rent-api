const Cloudinary = require('cloudinary').v2
const { cloudinary } = require('../configs/config')

Cloudinary.config({
    cloud_name: cloudinary.name,
    api_key: cloudinary.apiKey,
    api_secret: cloudinary.apiSecret,
})

module.exports = Cloudinary
