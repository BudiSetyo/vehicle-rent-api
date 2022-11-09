const jwt = require('jsonwebtoken')
const { jwt: JWT } = require('../configs/config')

const generateToken = (data) => {
    try {
        return jwt.sign(data, JWT.secretKey, { expiresIn: '1d' })
    } catch (err) {
        return err
    }
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT.secretKey)
    } catch (err) {
        return err
    }
}

module.exports = {
    generateToken,
    verifyToken,
}
