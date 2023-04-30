const express = require('express')
const authRoute = require('./auth')
const usersRoute = require('./users')
const vehiclesRoute = require('./vehicles')
const reservationsRoute = require('./reservations')
const paymentsRoute = require('./payments')
const locationRoute = require('./locations')
const vehicleStatusRoute = require('./vehicleStatus')
const vehicleTypeRoute = require('./vehicleType')
const chatsRoute = require('./chats')

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
    {
        path: '/locations',
        route: locationRoute,
    },
    {
        path: '/vehicleStatus',
        route: vehicleStatusRoute,
    },
    {
        path: '/vehicleType',
        route: vehicleTypeRoute,
    },
    {
        path: '/chats',
        route: chatsRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
