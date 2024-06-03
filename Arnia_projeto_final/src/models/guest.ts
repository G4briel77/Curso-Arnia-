// models/Guest.ts
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IGuest extends Document {
    name: string;
    email: string;
    password: string;
}

const guestSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

guestSchema.pre<IGuest>('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 8);
    next();
});

const Guest = mongoose.model<IGuest>('Guest', guestSchema);

export default Guest;