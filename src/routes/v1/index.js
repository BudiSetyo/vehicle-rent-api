const express = require('express')
const authRoute = require('./auth')
const usersRoute = require('./users')

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
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
