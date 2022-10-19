const UsersModel = require('../../models/api/users')

exports.insertUser = async (data) => {
    try {
        const _data = await UsersModel.query().insert({
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

exports.getUser = async (data) => {
    try {
        const _data = await UsersModel.query().findOne({ email: data.email })
        const checkPass = await _data.verifyPassword(password)

        if (!checkPass) {
            return {
                error: true,
                message: 'WRONG_PASSWORD',
            }
        }

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
