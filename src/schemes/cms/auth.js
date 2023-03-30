const AdminModel = require('../../models/cms/admin')

const loginCms = async (email, password) => {
    try {
        const _data = await AdminModel.query().findOne({ email: email })

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

module.exports = {
    loginCms,
}
