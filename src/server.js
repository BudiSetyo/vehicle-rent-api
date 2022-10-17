const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

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

// test
app.get('/', (_, res) => {
    res.send('Wellcome to my restfull API :)')
})

module.exports = app
