const usersSchema = require('../../schemes/api/users')
const { response } = require('../../utils/response')
const cloudinary = require('../../services/coudinary.config')

const editProfile = async (req, res) => {
    const data = req.body
    const userId = req.credential.id

    const edit = await usersSchema.editUser(data, userId)

    // console.log(edit)

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

const updateAvatar = async (req, res) => {
    const { file } = req
    const { id } = req.credential

    if (!file?.path) {
        return response(res, 400, {
            error: true,
            message: 'Image file not found',
        })
    }

    const upload = await cloudinary.uploader.upload(file.path)

    const _data = await usersSchema.updateAvatar(id, upload.secure_url)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Update avatar failed',
        })
    }

    return response(res, 200, {
        error: true,
        message: 'Update avatar success',
        image: upload.secure_url,
    })
}

module.exports = {
    editProfile,
    editPassword,
    getUserProfile,
    updateAvatar,
}
