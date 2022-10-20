const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes/v1')

const app = express()

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// enable cors
app.use(cors())
app.options('*', cors())

// logger
app.use(morgan('dev'))

// v1 api routes
app.use('/v1', routes)

// test
app.get('/', (_, res) => {
    res.send('Wellcome to my restfull API :)')
})

module.exports = app
