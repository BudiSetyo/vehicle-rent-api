const express = require('express')
// const validate = require('../../../middlewares/validate')
// const authValidation = require('../../../validations/auth')
const authMiddleware = require('../../../middlewares/auth')
const controllers = require('../../../controllers/api/chats')

const router = express.Router()

router.post('/', authMiddleware.authentication, controllers.addChat)

router.get(
    '/admin',
    authMiddleware.authentication,
    controllers.getListChatAdmin
)

router.get('/user', authMiddleware.authentication, controllers.getListChatUser)

router.get('/detail', authMiddleware.authentication, controllers.getChatDetail)

router.delete('/', authMiddleware.authentication, controllers.deleteChatById)

router.patch('/read', authMiddleware.authentication, controllers.readAllChat)

module.exports = router
