import mongoose from "mongoose"


const MessageSchema = new mongoose.Schema({
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
    sender: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    edited: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export default mongoose.model('Message', MessageSchema)