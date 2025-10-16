import { Router } from "express";
import ChatController from '../controllers/ChatConrolles.js'
import MessageController from '../controllers/MessageController.js'
import { chatCreateValidator, chatIdValidator, chatUpdateValidator, messageCreateValidator, messageIdValidator, messageUpdateValidator } from "../validations/validations.js";

const router = new Router();

router.post('/chats', chatCreateValidator ,ChatController.create);
router.get('/chats', ChatController.getAll);
router.get('/chats/search', ChatController.search);
router.get('/chats/:id', chatIdValidator ,ChatController.getOne);
router.delete('/chats/:id', chatIdValidator ,ChatController.remove);
router.patch('/chats/:id', chatUpdateValidator ,ChatController.update);

router.post('/message', messageCreateValidator ,MessageController.create);
router.get('/message/:chatId', messageIdValidator ,MessageController.getAll);
router.patch('/message', messageUpdateValidator , MessageController.edit);

export default router;