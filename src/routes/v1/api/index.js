const express = require('express')
const authRoute = require('./auth')
const usersRoute = require('./users')
const vehiclesRoute = require('./vehicles')
const reservationsRoute = require('./reservations')
const paymentsRoute = require('./payments')

const router = express.Router()

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/users',
        route: usersRoute,
    },
    {
        path: '/vehicles',
        route: vehiclesRoute,
    },
    {
        path: '/reservations',
        route: reservationsRoute,
    },
    {
        path: '/payments',
        route: paymentsRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
