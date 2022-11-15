require('dotenv').config()

const env = process.env

const config = {
    port: env.PORT,
    cloudinary: {
        name: env.CLOUD_NAME,
        apiKey: env.CLOUD_API_KEY,
        apiSecret: env.CLOUD_API_SECRET,
    },
    database: {
        host: env.DB_HOST,
        db: env.DB_NAME,
        user: env.DB_USER,
        password: env.DB_PASS,
        port: env.DB_PORT,
    },
    jwt: {
        secretKey: env.SECRET_KEY,
        isuer: env.ISUER,
        expire: env.EXPIRE,
    },
}

module.exports = config
