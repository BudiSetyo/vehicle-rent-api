const jwt = require('jsonwebtoken')
const { jwt: JWT } = require('../configs/config')
const { SignJWT, jwtVerify } = require('jose')

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

const generateEmailToken = (data) => {
    try {
        return jwt.sign(data, JWT.secretKey, { expiresIn: '5m' })
    } catch (err) {
        return err
    }
}

const generateJoseToken = (data) => {
    try {
        const iat = Math.floor(Date.now() / 1000)
        const exp = iat + 60 * 60 * 24 // one day

        return new SignJWT({ ...data })
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setExpirationTime(exp)
            .setIssuedAt(iat)
            .setNotBefore(iat)
            .sign(new TextEncoder().encode(JWT.secretKey))
    } catch (err) {
        return err
    }
}

const verifyJoseToken = async (token) => {
    try {
        const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(JWT.secretKey)
        )
        console.log(payload)
        return payload
    } catch (err) {
        return err
    }
}

module.exports = {
    generateToken,
    verifyToken,
    generateEmailToken,
    generateJoseToken,
    verifyJoseToken,
}
