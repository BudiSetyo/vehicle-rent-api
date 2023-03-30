const authSchema = require('../../schemes/api/auth')
const usersSchema = require('../../schemes/api/users')
const { response } = require('../../utils/response')
const { generateToken } = require('../../services/token')

const register = async (req, res) => {
    const { email, name, password } = req.body

    const checkUserExist = await usersSchema.getUserByEmail(email)

    if (checkUserExist.data !== undefined) {
        return response(res, 400, {
            error: true,
            message: 'User already exist',
        })
    }

    const _data = await authSchema.insertUser({ email, name, password })

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Register user failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Register success',
    })
}

const login = async (req, res) => {
    const { email, password } = req.body

    const checkUserExist = await usersSchema.getUserByEmail(email)

    if (checkUserExist.data === undefined) {
        return response(res, 400, {
            error: true,
            message: 'User not found!',
        })
    }

    const _data = await authSchema.login({ email, password })

    if (!_data.data) {
        return response(res, 400, _data)
    }

    const tokenData = {
        id: _data.data.id,
        email: _data.data.email,
        name: _data.data.name,
        avatar: _data.data.profileImage,
    }

    const token = await generateToken(tokenData)

    return response(res, 200, {
        error: false,
        message: 'Login success',
        data: tokenData,
        token: token,
    })
}

module.exports = {
    register,
    login,
}
