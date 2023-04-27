const { response } = require('../utils/response')
const tokenServices = require('../services/token')

const authentication = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return response(res, 400, {
            error: true,
            message: 'No token provided!',
        })
    }

    const verify = await tokenServices.verifyJoseToken(token)
    // console.log(verify)

    if (verify.code?.split('_')[0] === 'ERR') {
        return response(res, 400, {
            error: true,
            message: verify.message,
        })
    }

    if (verify.code === 'ERR_JWT_EXPIRED') {
        return response(res, 400, {
            error: true,
            message: 'You have to login!',
        })
    }

    req.credential = {
        id: verify.id,
        email: verify.email,
        name: verify.name,
        avatar: verify.avatar,
    }

    return next()
}

const checkToken = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return response(res, 400, {
            error: true,
            message: 'No token provided!',
        })
    }

    const verify = await tokenServices.verifyJoseToken(token)
    // console.log(verify)

    if (verify.code?.split('_')[0] === 'ERR') {
        return response(res, 400, {
            error: true,
            message: verify.message,
        })
    }

    if (verify.code === 'ERR_JWT_EXPIRED') {
        return response(res, 400, {
            error: true,
            message: 'You have to login!',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Token verified',
    })
}

module.exports = {
    authentication,
    checkToken,
}
