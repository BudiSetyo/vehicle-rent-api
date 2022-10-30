const { response } = require('../utils/response')
const tokenServices = require('../services/token')

const authentication = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return response(res, 400, {
            error: true,
            message: 'No token provided!',
        })
    }

    const verify = tokenServices.verifyToken(token)

    if (verify.name === 'JsonWebTokenError') {
        return response(res, 400, {
            error: true,
            message: verify.message,
        })
    }

    if (verify.name === 'TokenExpiredError') {
        return response(res, 400, {
            error: true,
            message: 'You have to login!',
        })
    }

    req.credential = {
        id: verify.id,
        email: verify.email,
        name: verify.name,
    }

    return next()
}

module.exports = {
    authentication,
}
