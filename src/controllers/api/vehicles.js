const vehiclesSchema = require('../../schemes/api/vehicles')
const { response } = require('../../utils/response')
const cloudinary = require('../../services/coudinary.config')

const addVehicle = async (req, res) => {
    const data = req.body

    const getVehicle = await vehiclesSchema.getVehicleByName(data.name)

    if (getVehicle.data !== undefined) {
        return response(res, 400, {
            error: true,
            message: 'Vehicle already exist!',
        })
    }

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Add vehicle failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Add vehicle success',
    })
}

const editImageVehicle = async (req, res) => {
    const { file } = req.file
    const { id } = req.query

    if (!file.path) {
        return response(res, 400, {
            error: true,
            message: 'Image file not found',
        })
    }

    const upload = await cloudinary.uploader.upload(file.path)

    const _data = await vehiclesSchema.editVehicle(
        {
            picture: upload.secure.url,
        },
        id
    )

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Edit image vehicle failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Edit image vehicle success',
    })
}

const editVehicle = async (req, res) => {
    const { id } = req.query
    const data = req.body

    const _data = await vehiclesSchema.editVehicle(data, id)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Edit vehicle failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Edit vehicle success',
    })
}

const getAllVehicle = async (req, res) => {
    const { search, type, location, popular, page, row } = req.query

    const _data = await vehiclesSchema.getAllVehicle(
        search,
        type,
        location,
        popular,
        page,
        row
    )

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get all vehicles failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get all vehicles success',
        data: _data,
    })
}

const getVehicleById = async (req, res) => {
    const { id } = req.body

    const _data = await vehiclesSchema.getVehicleById(id)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get vehicle failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get vehicle success',
        data: _data,
    })
}

module.exports = {
    addVehicle,
    getAllVehicle,
    getVehicleById,
    editImageVehicle,
    editVehicle,
}
