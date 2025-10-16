import { body, param} from "express-validator";

export const registerValidator = [
    body('email').isEmail(),
    body('name').isLength({min: 3}),
    body('avatarUrl').optional().isURL( )
]

export const chatCreateValidator = [
    body('firstName', "Enter firstName with chat").isLength({min: 3}).isString(),
    body('lastName', "Enter lastName with chat").isLength({min: 3}).isString(), 
]

export const chatUpdateValidator = [
  param('id', "Invalid chat ID").isMongoId(),
  body('firstName').isLength({ min: 2 }).isString(),
  body('lastName').isLength({ min: 2 }).isString(),
];


export const chatIdValidator = [
  param('id', "Invalid chat ID").isMongoId()
];



export const messageCreateValidator = [
  body('chatId', "chatId is required").isMongoId(),
  body('sender', "Sender must be 'user' or 'bot'").isIn(['user', 'bot']),
  body('text', "Text is required").isString().isLength({ min: 1 }),
  body('edited').optional().isBoolean()
];


export const messageUpdateValidator = [
  param('id', "Invalid message ID").isMongoId(),
  body('text', "Text is required").isString().isLength({ min: 1 })
];


export const messageIdValidator = [
  param('id', "Invalid message ID").isMongoId()
];