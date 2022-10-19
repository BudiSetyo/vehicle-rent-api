const UsersModel = require('../../models/api/users')

exports.insertUser = async (data) => {
    try {
        const _data = UsersModel.query().insert({
            email: data.email,
            name: data.name,
            password: data.password,
        })

        return {
            err: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}
