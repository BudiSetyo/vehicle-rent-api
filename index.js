require('dotenv').config()
const http = require('http')
const App = require('./src/server')

const server = http.createServer(App)

server.listen(process.env.PORT, () => {
    console.log('Server Running at Port', process.env.PORT)
})
