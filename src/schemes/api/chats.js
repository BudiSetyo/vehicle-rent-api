const ChatsModel = require('../../models/api/chats')

const insertChat = async (data) => {
    try {
        const _data = await ChatsModel.query().insert(data)

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getAllChatAdmin = async () => {
    try {
        const _data = await ChatsModel.query()
            .distinct('chats.userId')
            .withGraphFetched()

        return {
            error: false,
            data: _data,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

module.exports = {
    insertChat,
    getAllChatAdmin,
}
