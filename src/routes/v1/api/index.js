const express = require('express')
const authRoute = require('./auth')
const usersRoute = require('./users')
const vehiclesRoute = require('./vehicles')

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
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
