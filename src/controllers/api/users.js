const usersSchema = require('../../schemes/api/users')
const { response } = require('../../utils/response')

const editProfile = async (req, res) => {
    const data = req.body
    const userId = req.credential.id

    const edit = await usersSchema.editUser(data, userId)

    if (edit.error) {
        return response(res, 400, {
            error: true,
            message: 'Edit user failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Edit user success',
        data: edit,
    })
}

const editPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body
    const userId = req.credential.id

    const checkPass = await usersSchema.checkPassword(userId, oldPassword)

    if (!checkPass.data) {
        return response(res, 400, {
            error: true,
            message: 'Wrong password!',
        })
    }

    const edit = await usersSchema.editUser({ password: newPassword }, userId)

    if (edit.error) {
        return response(res, 400, {
            error: true,
            message: 'Edit password failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Edit password success',
        data: edit,
    })
}

const getUserProfile = async (req, res) => {
    const { id } = req.credential

    const profile = await usersSchema.getUserProfile(id)

    if (profile.error) {
        return response(res, 400, {
            error: true,
            message: 'Get user profile failed',
        })
    }

    return res.status(200).json({
        message: 'success',
        data: profile.data,
    })
}

module.exports = {
    editProfile,
    editPassword,
    getUserProfile,
}
