const LocationModel = require('../../models/api/location')

const getAllLocation = async () => {
    try {
        const _data = await LocationModel.query().orderBy(
            'location.name',
            'ASC'
        )

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
    getAllLocation,
}
