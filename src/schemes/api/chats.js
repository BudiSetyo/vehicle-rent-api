const ChatsModel = require('../../models/api/chats')
const UsersModel = require('../../models/api/users')

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

const getAllChatAdmin = async (userId) => {
    try {
        const query = `SELECT DISTINCT users.id, users.email, users.name, users."profileImage", (SELECT COUNT(*) FROM chats WHERE (chats."type" = 'admin') AND (chats."isRead" = '0') AND (chats."senderId" = users.id) AND (chats."receiverId" = '${userId}')) AS "unreadChat", (SELECT text FROM chats WHERE (chats."type" = 'admin') AND (chats."receiverId" = '${userId}' AND chats."senderId" = users.id) OR (chats."receiverId" = users.id AND chats."senderId" = '${userId}') ORDER BY chats."createdAt" DESC LIMIT 1 ) AS "currentChat", (SELECT chats."createdAt" FROM chats WHERE (chats."type" = 'admin') AND (chats."senderId" = users.id) ORDER BY chats."createdAt" DESC LIMIT 1) AS "createTime" FROM users INNER JOIN chats ON users.id = chats."senderId" ORDER BY "createTime" DESC`

        const _data = await UsersModel.knex().raw(query)

        return {
            error: false,
            data: _data?.rows,
        }
    } catch (err) {
        // console.log(err)
        return {
            error: true,
            data: err,
        }
    }
}

const getChatDetail = async (userId) => {
    try {
        const query = `SELECT chats.* FROM chats LEFT JOIN users ON (chats."senderId" = users.id) OR (chats."receiverId" = users.id) WHERE (chats."senderId" = '${userId}') OR (chats."receiverId" = '${userId}') ORDER BY chats."createdAt" DESC`

        const _data = await ChatsModel.knex().raw(query)

        return {
            error: false,
            data: _data?.rows,
        }
    } catch (err) {
        // console.log(err)
        return {
            error: true,
            data: err,
        }
    }
}

module.exports = {
    insertChat,
    getAllChatAdmin,
    getChatDetail,
}
