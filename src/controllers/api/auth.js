const authSchema = require('../../schemes/api/auth')
const { response } = require('../../utils/response')
const { generateToken } = require('../../services/token')

const register = async (req, res) => {
    const { email, name, password } = req.body

    const _data = await authSchema.insertUser({ email, name, password })

    if (_data.err) {
        return response(res, 400, {
            error: true,
            message: 'Register user failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Register success',
        data: _data,
    })
}

const login = async (req, res) => {
    const { email, password } = req.body

    const _data = await authSchema.login({ email, password })

    if (!_data.data) {
        return response(res, 400, {
            error: true,
            message: 'User not found!',
        })
    }

    const tokenData = {
        id: _data.data.id,
        email: _data.data.email,
        name: _data.data.name,
    }

    const token = generateToken(tokenData)

    return response(res, 200, {
        error: false,
        message: 'Login success',
        data: tokenData,
        token,
    })
}

module.exports = {
    register,
    login,
}
