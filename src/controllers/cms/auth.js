const authSchemaCms = require('../../schemes/cms/auth')
const adminSchema = require('../../schemes/cms/admin')
const { response } = require('../../utils/response')
const { generateToken } = require('../../services/token')

const loginCms = async (req, res) => {
    const { email, password } = req.body

    const getAdminByEmail = await adminSchema.getAdminByEmail(email)

    if (getAdminByEmail.data === undefined) {
        return response(res, 400, {
            error: true,
            message: 'User not found!',
        })
    }

    const _data = await authSchemaCms.loginCms(email, password)

    if (!_data.data) {
        return response(res, 400, _data)
    }

    const tokenData = {
        id: _data.data.id,
        email: _data.data.email,
        name: _data.data.name,
        avatar: _data.data.profileImage,
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
    loginCms,
}
