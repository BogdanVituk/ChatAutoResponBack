import MessageService from "../services/MessageService.js";

class MessageController {

   create = async (req, res) => {
        try {
        const io = req.app.locals.io;
        const message = await MessageService.create(req.body, io);
        res.json(message)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Bad try create message"
            })
        }
    }

   getAll = async (req, res) => {
        try {
            const messages = await MessageService.getAll(req.params.chatId)
            res.json(messages);
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Bad try get messages"
            })
        }
    }

   edit = async (req, res) => {
        try {

            const message = await MessageService.edit(req.body.text, req.params.id)
            res.json(message);
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Bad try edit message"
            })
        }
    }
}

export default new MessageController();