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
        db: env.DB,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
    },
    jwt: {
        secretKey: env.SECRET_KEY,
        isuer: env.ISUER,
        expire: env.EXPIRE,
    },
}

module.exports = config
