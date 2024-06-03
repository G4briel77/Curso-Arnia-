import mongoose, { Schema, Document } from 'mongoose';

interface IRoom extends Document {
    number: number;
    type: string;
    status: 'available' | 'occupied' | 'maintenance';
}

const roomSchema: Schema = new Schema({
    number: { type: Number, required: true, unique: true },
    type: { type: String, required: true },
    status: { type: String, enum: ['available', 'occupied', 'maintenance'], required: true, default: 'available' }
});

const Room = mongoose.model<IRoom>('Room', roomSchema);

export default Room;