import mongoose from 'mongoose';

const ChatShema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" }
    
}, {
    timestamps: true
})

export default mongoose.model('Chat', ChatShema);