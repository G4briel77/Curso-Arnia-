import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    guest: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    // Outros atributos relevantes para a reserva
}, {
    timestamps: true
});

const ReservationModel = mongoose.model('Reservation', ReservationSchema);

export default ReservationModel;