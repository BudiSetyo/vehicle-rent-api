require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateToken = (data) => {
    try {
        return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '1d' })
    } catch (err) {
        return err
    }
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY)
    } catch (err) {
        return err
    }
}

module.exports = {
    generateToken,
    verifyToken,
}
