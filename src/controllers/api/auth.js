const usersSchema = require('../../schemes/api/users')
const { response } = require('../../utils/response')

const register = async (req, res) => {
    const { email, name, password } = req.payload

    const _data = await usersSchema.insertUser({ email, name, password })

    if (_data.err) {
        return response(res, 400, {
            err: true,
            message: 'Register user failed',
        })
    }

    return response(res, 200, {
        err: false,
        message: 'Register success',
        data: _data,
    })
}

const login = async (req, res) => {
    const { email, password } = req.payload
}

module.exports = {
    register,
}
