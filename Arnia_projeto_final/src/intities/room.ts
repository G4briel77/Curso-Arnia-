import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    roomNumber: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, enum: ['available', 'occupied', 'maintenance'], default: 'available' },
    // Outros atributos relevantes para o quarto
}, {
    timestamps: true
});

const RoomModel = mongoose.model('Room', RoomSchema);

export default RoomModel;