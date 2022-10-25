const UsersModel = require('../../models/api/users')

const insertUser = async (data) => {
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
            err: true,
            data: err,
        }
    }
}

const login = async (data) => {
    try {
        const _data = await UsersModel.query().findOne({ email: data.email })
        const checkPass = await _data.verifyPassword(data.password)

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

module.exports = {
    insertUser,
    login,
}
