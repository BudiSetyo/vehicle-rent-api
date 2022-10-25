const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport(config.email.smtp)
