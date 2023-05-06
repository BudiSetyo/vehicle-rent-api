const chatsSchema = require('../../schemes/api/chats')
const { response } = require('../../utils/response')

const addChat = async (req, res) => {
    const { senderId, receiverId } = req.query
    const data = req.body

    const _data = await chatsSchema.insertChat({
        senderId,
        receiverId,
        ...data,
    })

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Insert message failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Insert message success',
    })
}

const getAllChatAdmin = async (req, res) => {
    const { userId } = req.query

    const _data = await chatsSchema.getAllChatAdmin(userId)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get message failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get message success',
        data: _data.data,
    })
}

const getChatDetail = async (req, res) => {
    const { userId } = req.query

    const _data = await chatsSchema.getChatDetail(userId)

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get message failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'Get message success',
        data: _data.data,
    })
}

module.exports = {
    addChat,
    getAllChatAdmin,
    getChatDetail,
}
