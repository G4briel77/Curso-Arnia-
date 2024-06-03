import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    fullname: { type: String, minlength: 2 },
    email: { type: String, unique: true },
    password: { type: String, minlength: 6, maxlength: 8 }
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', UserSchema); // Corrigido o typo 'moongoose' para 'mongoose'

export default UserModel; // Exportação corrigida para 'export default'