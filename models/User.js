import mongoose from 'mongoose';

const UserShema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    avatarUrl: String,
    
}, {
    timestamps: true
})

export default mongoose.model('User', UserShema);