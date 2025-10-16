
import ChatService from '../services/ChatService.js';

class ChatConroller {

    create = async (req, res) => {
        try {
            const chat = await ChatService.create(req.body);
            res.json(chat);
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Bad try create chat"
            })
        }
    }

    getAll = async (req, res) => {
        try {
            const chats = await ChatService.getAll();
            res.json(chats);
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Bad try get chats"
            })
        }
    }

    getOne = async (req, res) => {
        try {
            const chatId = req.params.id;

            const chat = await ChatService.getOne(chatId)

            res.json(chat)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Bad try get Chat"
            })
        }
    }

    remove = async (req, res) => {
    try {
        const chatId = req.params.id;

        const chat = await ChatService.remove(chatId)
        res.json(chat);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Bad try create chat"
        })
    }
    }
    
    search = async (req, res) => {``
        try {
            
            const { q } = req.query;

            const chats = await ChatService.search(q) 

            res.json(chats);

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Bad try search chat"
            })
        }
    }

    update = async (req, res) => {
        try {
            const chatId = req.params.id;

            const chat = await ChatService.update(chatId, req.body)
            res.json(chat);
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Bad try update chat"
            })
        }
    }
}

export default new ChatConroller();