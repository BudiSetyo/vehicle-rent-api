const VehiclesModel = require('../../models/api/vehicles')

const createVehicle = async (data) => {
    try {
        const _data = await VehiclesModel.query().insert(data)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const editVehicle = async (data, id) => {
    try {
        const _data = await VehiclesModel.query().patch(data).where({ id: id })

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getAllVehicle = async (search, type, location, popular, page, row) => {
    try {
        let _data

        const paramSearch = `%${search?.toUpperCase()}%`

        if (!search && !type && !location && !popular) {
            _data = await VehiclesModel.query()
                .leftJoinRelated('vehicleType')
                .leftJoinRelated('vehicleLocation')
                .leftJoinRelated('vehicleStatus')
                .select(
                    'vehicles.id',
                    'vehicles.name',
                    'vehicleType.name as type',
                    'vehicleLocation.name as location',
                    'vehicles.isPopular',
                    'vehicles.description',
                    'vehicles.price',
                    'vehicleStatus.name as status',
                    'vehicles.picture',
                    'vehicles.stock',
                    'vehicles.createdAt',
                    'vehicles.updatedAt'
                )
                .orderBy('vehicles.createdAt', 'DESC')
                .page(page || 1 - 1, row || 10)

            return {
                error: false,
                data: _data,
            }
        }

        if (search && !type && !location && !popular) {
            _data = await VehiclesModel.query()
                .leftJoinRelated('vehicleType')
                .leftJoinRelated('vehicleLocation')
                .leftJoinRelated('vehicleStatus')
                .select(
                    'vehicles.id',
                    'vehicles.name',
                    'vehicleType.name as type',
                    'vehicleLocation.name as location',
                    'vehicles.isPopular',
                    'vehicles.description',
                    'vehicles.price',
                    'vehicleStatus.name as status',
                    'vehicles.picture',
                    'vehicles.stock',
                    'vehicles.createdAt',
                    'vehicles.updatedAt'
                )
                .whereRaw('UPPER(vehicles.name) like ?', paramSearch)
                .orderBy('vehicles.createdAt', 'DESC')
                .page(page || 1 - 1, row || 10)

            return {
                error: false,
                data: _data,
            }
        }

        if (!paramSearch && type && !location && !popular) {
            _data = await VehiclesModel.query()
                .leftJoinRelated('vehicleType')
                .leftJoinRelated('vehicleLocation')
                .leftJoinRelated('vehicleStatus')
                .select(
                    'vehicles.id',
                    'vehicles.name',
                    'vehicleType.name as type',
                    'vehicleLocation.name as location',
                    'vehicles.isPopular',
                    'vehicles.description',
                    'vehicles.price',
                    'vehicleStatus.name as status',
                    'vehicles.picture',
                    'vehicles.stock',
                    'vehicles.createdAt',
                    'vehicles.updatedAt'
                )
                .where('vehicleType.name', type)
                .orderBy('vehicles.createdAt', 'DESC')
                .page(page || 1 - 1, row || 10)

            return {
                error: false,
                data: _data,
            }
        }

        if (!paramSearch && !type && location && !popular) {
            _data = await VehiclesModel.query()
                .leftJoinRelated('vehicleType')
                .leftJoinRelated('vehicleLocation')
                .leftJoinRelated('vehicleStatus')
                .select(
                    'vehicles.id',
                    'vehicles.name',
                    'vehicleType.name as type',
                    'vehicleLocation.name as location',
                    'vehicles.isPopular',
                    'vehicles.description',
                    'vehicles.price',
                    'vehicleStatus.name as status',
                    'vehicles.picture',
                    'vehicles.stock',
                    'vehicles.createdAt',
                    'vehicles.updatedAt'
                )
                .where('vehicleLocation.name', location)
                .orderBy('vehicles.createdAt', 'DESC')
                .page(page || 1 - 1, row || 10)

            return {
                error: false,
                data: _data,
            }
        }

        if (!paramSearch && !type && !location && popular) {
            _data = await VehiclesModel.query()
                .leftJoinRelated('vehicleType')
                .leftJoinRelated('vehicleLocation')
                .leftJoinRelated('vehicleStatus')
                .select(
                    'vehicles.id',
                    'vehicles.name',
                    'vehicleType.name as type',
                    'vehicleLocation.name as location',
                    'vehicles.isPopular',
                    'vehicles.description',
                    'vehicles.price',
                    'vehicleStatus.name as status',
                    'vehicles.picture',
                    'vehicles.stock',
                    'vehicles.createdAt',
                    'vehicles.updatedAt'
                )
                .where('vehicles.isPopular', true)
                .orderBy('vehicles.createdAt', 'DESC')
                .page(page || 1 - 1, row || 10)

            return {
                error: false,
                data: _data,
            }
        }
    } catch (err) {
        console.log(err)
        return {
            error: true,
            data: err,
        }
    }
}

const getVehicleById = async (id) => {
    try {
        const _data = await VehiclesModel.query().findOne({ id: id })

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getVehicleByName = async (name) => {
    try {
        const _data = await VehiclesModel.query().findOne({ name: name })

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

module.exports = {
    createVehicle,
    editVehicle,
    getAllVehicle,
    getVehicleById,
    getVehicleByName,
}
