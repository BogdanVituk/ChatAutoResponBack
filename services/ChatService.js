import ChatModel from '../models/Chat.js'

class ChatService {

    create = async (chat) => {
        const {firstName, lastName} = chat;

        const doc = new ChatModel({firstName, lastName})
        return await doc.save();
    }

    getAll = async () => {
        return await ChatModel.find().populate('lastMessage');  
    }

    getOne = async (chatId) => {

    return await ChatModel.findById({_id: chatId});

    }

    remove = async (chatId) => {

    return await ChatModel.findOneAndDelete({ _id: chatId });
  
    }   

    search = async (q) => {

        if (!q) {
            return await ChatModel.find();
        }

         return await ChatModel.find({
            $or: [
                { firstName: { $regex: q, $options: 'i' } },
                { lastName: { $regex: q, $options: 'i' } }
            ]
        })  
    }

   update = async (chatId, chat) => {


    return await ChatModel.findByIdAndUpdate({
        _id: chatId
    }, {
        ...chat
    },
    { new: true }
    )

}
}

export default new ChatService();