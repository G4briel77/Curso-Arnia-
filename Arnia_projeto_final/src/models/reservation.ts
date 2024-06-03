import mongoose, { Schema, Document } from 'mongoose';

interface IReservation extends Document {
    room: mongoose.Schema.Types.ObjectId;
    guest: mongoose.Schema.Types.ObjectId;
    startDate: Date;
    endDate: Date;
    status: 'reserved' | 'canceled';
}

const reservationSchema: Schema = new Schema({
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    guest: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ['reserved', 'canceled'], required: true, default: 'reserved' }
});

const Reservation = mongoose.model<IReservation>('Reservation', reservationSchema);

export default Reservation;