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

const getListChatAdmin = async (userId) => {
    try {
        const query = `SELECT DISTINCT users.id, users.email, users.name, users."profileImage", (SELECT COUNT(*) FROM chats WHERE (chats."type" = 'admin') AND (chats."isRead" = '0') AND (chats."senderId" = users.id) AND (chats."receiverId" = '${userId}')) AS "unreadChat", (SELECT text FROM chats WHERE (chats."receiverId" = '${userId}' AND chats."senderId" = users.id) OR (chats."receiverId" = users.id AND chats."senderId" = '${userId}') ORDER BY chats."createdAt" DESC LIMIT 1 ) AS "currentChat", (SELECT chats."createdAt" FROM chats WHERE (chats."receiverId" = '${userId}' AND chats."senderId" = users.id) OR (chats."receiverId" = users.id AND chats."senderId" = '${userId}') ORDER BY chats."createdAt" DESC LIMIT 1) AS "createdTime" FROM users INNER JOIN chats ON users.id = chats."senderId" ORDER BY "createdTime" DESC`

        const _data = await ChatsModel.knex().raw(query)

        return {
            error: false,
            data: _data?.rows,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getChatDetail = async (userId) => {
    try {
        const query = `SELECT chats.* FROM chats WHERE (chats."senderId" = '${userId}') OR (chats."receiverId" = '${userId}') ORDER BY chats."createdAt" DESC`

        const _data = await ChatsModel.knex().raw(query)

        return {
            error: false,
            data: _data?.rows,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const getListChatUser = async (userId) => {
    try {
        const query = `SELECT DISTINCT admin.id, admin.email, admin.name, admin."profileImage", (SELECT COUNT(*) FROM chats WHERE (chats.type = 'user') AND (chats."isRead" = '0') AND (chats."receiverId" = '${userId}')) AS "unreadChat", (SELECT text FROM chats WHERE (chats."senderId" = '${userId}' AND chats."receiverId" = admin.id) OR (chats."senderId" = admin.id AND chats."receiverId" = '${userId}') ORDER BY "createdAt" DESC LIMIT 1) AS "currentChat", (SELECT "createdAt" FROM chats WHERE (chats."senderId" = '${userId}' AND chats."receiverId" = admin.id) OR (chats."senderId" = admin.id AND chats."receiverId" = '${userId}') ORDER BY "createdAt" DESC LIMIT 1) AS "createdTime" FROM admin INNER JOIN chats ON (admin.id = chats."senderId") OR (admin.id = chats."receiverId") ORDER BY "createdTime" DESC`

        const _data = await ChatsModel.knex().raw(query)

        return {
            error: false,
            data: _data?.rows,
        }
    } catch (err) {
        return {
            error: true,
            data: err,
        }
    }
}

const deleteChatById = async (id) => {
    try {
        const _data = await ChatsModel.query().deleteById(id)
    } catch (error) {
        return {
            error: true,
            data: err,
        }
    }
}

const readAllChat = async (userId) => {
    try {
        const _data = await ChatsModel.query()
            .patch({ isRead: true })
            .where('isRead', '0')
            .andWhere('receiverId', userId)

        return {
            error: false,
            data: _data,
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
    getListChatAdmin,
    getChatDetail,
    getListChatUser,
    deleteChatById,
    readAllChat,
}
