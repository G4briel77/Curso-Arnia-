import mongoose, { Schema, Document } from 'mongoose';

const reservationSchema: Schema = new Schema({
  room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
  guest: { type: Schema.Types.ObjectId, ref: 'Guest', required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
});

interface IReservation extends Document {
  room: mongoose.Types.ObjectId;
  guest: mongoose.Types.ObjectId;
  checkInDate: Date;
  checkOutDate: Date;
}

const Reservation = mongoose.model<IReservation>('Reservation', reservationSchema);

export default Reservation;