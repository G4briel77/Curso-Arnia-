import mongoose, { Schema, Document } from 'mongoose';

// Definindo o esquema para o modelo Room
const roomSchema: Schema = new Schema({
  number: { type: Number, required: true },
  type: { type: String, enum: ['standard', 'deluxe', 'suite'], required: true },
  status: { type: String, enum: ['available', 'occupied', 'maintenance'], default: 'available' },
});

// Definindo a interface para o documento do modelo Room
interface IRoom extends Document {
  number: number;
  status: 'available' | 'occupied' | 'maintenance';
}

// Criando o modelo Room a partir do esquema
const Room = mongoose.model<IRoom>('Room', roomSchema);

export default Room;