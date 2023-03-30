const express = require('express')
const adminRoute = require('./admin')
const authRoute = require('./auth')
const customerRoute = require('./customer')
const transactionRoute = require('./transaction')

const router = express.Router()

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/admin',
        route: adminRoute,
    },
    {
        path: '/customer',
        route: customerRoute,
    },
    {
        path: '/transaction',
        route: transactionRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
