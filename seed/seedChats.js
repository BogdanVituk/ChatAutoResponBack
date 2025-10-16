import ChatModel from '../models/Chat.js';

export const seedChats = async () => {
  const count = await ChatModel.countDocuments();
    if (count === 0) {
      await ChatModel.insertMany([
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Alice', lastName: 'Smith' },
        { firstName: 'Bob', lastName: 'Johnson' }
      ]);
      console.log(' 3 predefined chats added');
    } else {
      console.log(' Chats already exist, skipping seed');
    }
};