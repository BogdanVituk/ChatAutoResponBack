import MessageModel from "../models/Message.js";
import Chat from "../models/Chat.js";
import axios from "axios";

class BotService {

    async sendAutoReply(chatId, io) {
    try {
            const { data } = await axios.get(process.env.ZEN_QUOTES_API);
            
            const botMessage = new MessageModel({
                chatId,
                sender: 'bot',
                text: data[0].q
            })
            const saved = await botMessage.save();
            await Chat.findByIdAndUpdate(
                chatId, 
                { $set: {lastMessage: saved._id} },
            )
            io.to(chatId).emit('newMessage', botMessage);

        } catch (error) {
            console.error('Erorr fetching qoute', error.message)
        }
    }
}

export default new BotService();