import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    // Outros atributos relevantes para o gerente
}, {
    timestamps: true
});

const AdminModel = mongoose.model('Admin', AdminSchema);

export default AdminModel;