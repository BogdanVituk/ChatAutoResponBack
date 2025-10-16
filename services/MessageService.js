import Chat from "../models/Chat.js";
import MessageModel from "../models/Message.js";
import BotService from "./BotService.js";

class MessageService {

    create = async (message, io) => {
        const { chatId, sender, text } = message;

        const doc = new MessageModel({
            chatId,
            sender,
            text
        })

        const saved = await doc.save();
        await Chat.findByIdAndUpdate(
            chatId, 
            { $set: {lastMessage: saved._id} },
        )

        setTimeout(() => BotService.sendAutoReply(chatId,io), 3000)

        return saved
}

    getAll = async (chatId) => {
        return await MessageModel.find({chatId}).sort({createdAt: 1});

    }

    edit = async (text, messageId) => {

        if(!messageId || !text) {
            throw new Error('invalid messageId or text')
        }

     return await MessageModel.findByIdAndUpdate(messageId, {text, edited: true});
    }
}

export default new MessageService();