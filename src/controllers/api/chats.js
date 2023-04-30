const chatsSchema = require('../../schemes/api/chats')
const { response } = require('../../utils/response')

const addChat = async (req, res) => {
    const { senderId, receiverId } = req.query
    const { text, isRead, userId, vehicleId, adminId } = req.body

    const _data = await chatsSchema.insertChat({
        userId,
        vehicleId,
        adminId,
        senderId,
        receiverId,
        text,
        isRead,
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
    const _data = await chatsSchema.getAllChatAdmin()

    if (_data.error) {
        return response(res, 400, {
            error: true,
            message: 'Get message failed',
        })
    }

    return response(res, 200, {
        error: false,
        message: 'get message success',
        data: _data.data,
    })
}

module.exports = {
    addChat,
    getAllChatAdmin,
}
