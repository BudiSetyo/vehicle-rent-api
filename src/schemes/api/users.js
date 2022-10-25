const UsersModel = require('../../models/api/users')

const getUserByEmail = async (email) => {
    try {
        const _data = await UsersModel.query().findOne({ email: email })

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

const getUserById = async (id) => {
    try {
        const _data = await UsersModel.query().findOne({ id: id })

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

const checkPassword = async (id, password) => {
    try {
        const _data = await UsersModel.query().findOne({ id: id })
        const checkPass = await _data.verifyPassword(password)

        if (!checkPass) {
            return {
                error: true,
                data: checkPass,
            }
        }

        return {
            error: false,
            data: checkPass,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const editUser = async (data, id) => {
    try {
        const _data = await UsersModel.query().patch(data).findById(id)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data,
            err,
        }
    }
}

module.exports = {
    getUserByEmail,
    getUserById,
    editUser,
    checkPassword,
}
